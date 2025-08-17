import antlr4 from 'antlr4';
import MathLexer from './MathLexer.js';
import MathParser  from './MathParser.js';
import MathVisitor from './MathVisitor.js';

class Visitor extends MathVisitor {

    auxiliaryFunctions = [];

    visitProg(ctx) {
        return `
        // AUXILIARY FUNCTIONS
        ${this.auxiliaryFunctions.join(`\n`)}
        
        vec2 f(vec2 z) {
            return ${ctx.expr().accept(this)};
        }
        `;
    }

    visitSum(ctx) {
        const funcName = `aux${this.auxiliaryFunctions.length}`;
        const index = ctx.index.accept(this);
        this.auxiliaryFunctions.push(`vec2 ${funcName}(vec2 z) {
            vec2 temp = vec2(0.0, 0.0);
            for(int ${index} = ${ctx.initial.accept(this)}; ${index} <= ${ctx.final.accept(this)}; ${index} += 1) {
                temp += ${ctx.expr().accept(this)};
            }
        }`);

        return `${funcName}(z)`;
    }

    visitUnaryExpr(ctx) {
        if(ctx.op.type == MathLexer.OP_MIN)
            return `-(${ctx.expr().accept(this)}`;
        else
            return ctx.expr().accept(this);
    }

    visitPassExpr(ctx) {
        return (ctx.dchild ? ctx.dchild : ctx.pchild).accept(this);
    }

    visitSumDiffExpr(ctx) {
        if(ctx.op.type == MathLexer.OP_ADD)
            return `${ctx.left.accept(this)} + ${ctx.right.accept(this)}`;
        else
            return `${ctx.left.accept(this)} - ${ctx.right.accept(this)}`;
    }

    visitFrac(ctx) {
        return `cdiv(${ctx.left.accept(this)}, ${ctx.right.accept(this)})`;
    }

    visitUnaryProd(ctx) {
        return ctx.atom().accept(this);
    }

    visitBinProd(ctx) {
        return `cmul(${ctx.left.accept(this)}, ${ctx.right.accept(this)})`;
    }

    visitPassAtom(ctx) {
        return (ctx.fchild ? ctx.fchild : ctx.echild).accept(this);
    }

    visitValAtom(ctx) {
        const val = ctx.getText();
        switch(val) {
            case 'e':
                return 'vec2(E, 0.0)';
            case 'i':
                return 'I';
            case '\\pi':
                return 'vec2(PI, 0.0)';
            case 'j':
            case 'k':
            case 'n':
            case 'm':
            case 'z':
                return val;
            default:
                if (val.includes('.'))
                    return `vec2(${val}, 0.0)`;
                else
                    return `vec2(${val}.0, 0.0)`;
        }
    }

    visitPowAtom(ctx) {
        return `cpow(${ctx.left.accept(this)}, ${ctx.right.accept(this)})`;
    }

    visitFunc(ctx) {
        switch(ctx.fn_name().val.type) {
            case MathLexer.FN_SIN:
                return `csin(${ctx.expr().accept(this)})`;
            case MathLexer.FN_COS:
                return `ccos(${ctx.expr().accept(this)})`;
            case MathLexer.FN_TAN:
                return `ctan(${ctx.expr().accept(this)})`;
            case MathLexer.FN_ARCSIN:
            case MathLexer.FN_ARCCOS:
            case MathLexer.FN_ARCTAN:
                return "";
            case MathLexer.FN_EXP:
                return `cexp(${ctx.expr().accept(this)})`;
            case MathLexer.FN_LOG:
                return `clog(${ctx.expr().accept(this)})`;
        }
    }
}

export function parse(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MathLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MathParser(tokens);
    const cst = parser.prog();
    const expression = cst.accept(new Visitor());
    return expression;
}