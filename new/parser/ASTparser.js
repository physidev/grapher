import antlr4 from 'antlr4';
import MathLexer from './MathLexer.js';
import MathParser  from './MathParser.js';
import MathVisitor from './MathVisitor.js';

class ASTNode {
    constructor(op) {
        this.op = op
    }
}

class Visitor extends MathVisitor {

	visitProg(ctx) {
        return ctx.expr().accept(this);
	}

	visitUnaryExpr(ctx) {
        let node;
        if(ctx.op.type == MathLexer.OP_MIN)
            node = new ASTNode('u-');
        else
            node = new ASTNode('u+');

        node.children = [ctx.expr().accept(this)];
        return node;
	}

	visitPassExpr(ctx) {
        return (ctx.dchild ? ctx.dchild : ctx.pchild).accept(this);
	}

	visitSumDiffExpr(ctx) {
        let node;
        if(ctx.op.type == MathLexer.OP_ADD)
            node = new ASTNode('+');
        else
            node = new ASTNode('-');

        node.children = [ctx.left.accept(this), ctx.right.accept(this)];
        return node;
	}

	visitFrac(ctx) {
        let node = new ASTNode('/');
        node.children = [ctx.left.accept(this), ctx.right.accept(this)];
        return node;
	}

    visitUnaryProd(ctx) {
        return ctx.atom().accept(this);
    }

	visitBinProd(ctx) {
        let node = new ASTNode('*');
        node.children = [ctx.left.accept(this), ctx.right.accept(this)];
        return node;
	}

	visitPassAtom(ctx) {
	    return (ctx.fchild ? ctx.fchild : ctx.echild).accept(this);
    }

    visitValAtom(ctx) {
        return new ASTNode(ctx.getText());
    }

	visitPowAtom(ctx) {
        let node = new ASTNode('^');
        node.children = [ctx.left.accept(this), ctx.right.accept(this)];
        return node;
	}

	visitFunc(ctx) {
        let name;
        switch(ctx.fn_name().val.type) {
            case MathLexer.FN_SIN:      name = 'sin';       break;
            case MathLexer.FN_COS:      name = 'cos';       break;
            case MathLexer.FN_TAN:      name = 'tan';       break;
            case MathLexer.FN_ARCSIN:   name = 'arcsin';    break;
            case MathLexer.FN_ARCCOS:   name = 'arccos';    break;
            case MathLexer.FN_ARCTAN:   name = 'arctan';    break;
            case MathLexer.FN_EXP:      name = 'exp';       break;
            case MathLexer.FN_LOG:      name = 'log';       break;
        }
        let node = new ASTNode(name);
        node.children = [ctx.expr().accept(this)];
        return node;
    }
}

export function parse(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MathLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MathParser(tokens);
    const cst = parser.prog();
    const ast = cst.accept(new Visitor());
    return ast;
}