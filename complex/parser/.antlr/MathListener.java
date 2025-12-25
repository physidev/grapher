// Generated from c:/Dev/GitHub/grapher/complex/parser/Math.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MathParser}.
 */
public interface MathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MathParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(MathParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link MathParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(MathParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unaryExpr}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterUnaryExpr(MathParser.UnaryExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unaryExpr}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitUnaryExpr(MathParser.UnaryExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code passExpr}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterPassExpr(MathParser.PassExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code passExpr}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitPassExpr(MathParser.PassExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sumDiffExpr}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterSumDiffExpr(MathParser.SumDiffExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sumDiffExpr}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitSumDiffExpr(MathParser.SumDiffExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MathParser#sum}.
	 * @param ctx the parse tree
	 */
	void enterSum(MathParser.SumContext ctx);
	/**
	 * Exit a parse tree produced by {@link MathParser#sum}.
	 * @param ctx the parse tree
	 */
	void exitSum(MathParser.SumContext ctx);
	/**
	 * Enter a parse tree produced by {@link MathParser#frac}.
	 * @param ctx the parse tree
	 */
	void enterFrac(MathParser.FracContext ctx);
	/**
	 * Exit a parse tree produced by {@link MathParser#frac}.
	 * @param ctx the parse tree
	 */
	void exitFrac(MathParser.FracContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unaryProd}
	 * labeled alternative in {@link MathParser#prod}.
	 * @param ctx the parse tree
	 */
	void enterUnaryProd(MathParser.UnaryProdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unaryProd}
	 * labeled alternative in {@link MathParser#prod}.
	 * @param ctx the parse tree
	 */
	void exitUnaryProd(MathParser.UnaryProdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code binProd}
	 * labeled alternative in {@link MathParser#prod}.
	 * @param ctx the parse tree
	 */
	void enterBinProd(MathParser.BinProdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code binProd}
	 * labeled alternative in {@link MathParser#prod}.
	 * @param ctx the parse tree
	 */
	void exitBinProd(MathParser.BinProdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code passAtom}
	 * labeled alternative in {@link MathParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterPassAtom(MathParser.PassAtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code passAtom}
	 * labeled alternative in {@link MathParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitPassAtom(MathParser.PassAtomContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valAtom}
	 * labeled alternative in {@link MathParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterValAtom(MathParser.ValAtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valAtom}
	 * labeled alternative in {@link MathParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitValAtom(MathParser.ValAtomContext ctx);
	/**
	 * Enter a parse tree produced by the {@code powAtom}
	 * labeled alternative in {@link MathParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterPowAtom(MathParser.PowAtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code powAtom}
	 * labeled alternative in {@link MathParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitPowAtom(MathParser.PowAtomContext ctx);
	/**
	 * Enter a parse tree produced by {@link MathParser#func}.
	 * @param ctx the parse tree
	 */
	void enterFunc(MathParser.FuncContext ctx);
	/**
	 * Exit a parse tree produced by {@link MathParser#func}.
	 * @param ctx the parse tree
	 */
	void exitFunc(MathParser.FuncContext ctx);
	/**
	 * Enter a parse tree produced by {@link MathParser#fn_name}.
	 * @param ctx the parse tree
	 */
	void enterFn_name(MathParser.Fn_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MathParser#fn_name}.
	 * @param ctx the parse tree
	 */
	void exitFn_name(MathParser.Fn_nameContext ctx);
}