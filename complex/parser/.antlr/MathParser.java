// Generated from c:/Dev/GitHub/grapher/complex/parser/Math.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MathParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, OP_ADD=12, OP_MIN=13, OP_POW=14, FN_SIN=15, FN_COS=16, 
		FN_TAN=17, FN_ARCSIN=18, FN_ARCCOS=19, FN_ARCTAN=20, FN_EXP=21, FN_LOG=22, 
		CONSTANT=23, VARIABLE=24, REAL=25, WS=26;
	public static final int
		RULE_prog = 0, RULE_expr = 1, RULE_sum = 2, RULE_frac = 3, RULE_prod = 4, 
		RULE_atom = 5, RULE_func = 6, RULE_fn_name = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "expr", "sum", "frac", "prod", "atom", "func", "fn_name"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'\\sum_{'", "'='", "'}^{'", "'}'", "'\\frac{'", "'}{'", "'\\cdot'", 
			"'('", "')'", "'{'", "'\\'", "'+'", "'-'", "'^'", "'sin'", "'cos'", "'tan'", 
			"'arcsin'", "'arccos'", "'arctan'", "'exp'", "'log'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"OP_ADD", "OP_MIN", "OP_POW", "FN_SIN", "FN_COS", "FN_TAN", "FN_ARCSIN", 
			"FN_ARCCOS", "FN_ARCTAN", "FN_EXP", "FN_LOG", "CONSTANT", "VARIABLE", 
			"REAL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Math.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MathParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MathParser.EOF, 0); }
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitProg(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			expr(0);
			setState(17);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnaryExprContext extends ExprContext {
		public Token op;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode OP_ADD() { return getToken(MathParser.OP_ADD, 0); }
		public TerminalNode OP_MIN() { return getToken(MathParser.OP_MIN, 0); }
		public UnaryExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterUnaryExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitUnaryExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassExprContext extends ExprContext {
		public SumContext schild;
		public FracContext dchild;
		public ProdContext pchild;
		public SumContext sum() {
			return getRuleContext(SumContext.class,0);
		}
		public FracContext frac() {
			return getRuleContext(FracContext.class,0);
		}
		public ProdContext prod() {
			return getRuleContext(ProdContext.class,0);
		}
		public PassExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterPassExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitPassExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SumDiffExprContext extends ExprContext {
		public ExprContext left;
		public Token op;
		public ExprContext right;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OP_ADD() { return getToken(MathParser.OP_ADD, 0); }
		public TerminalNode OP_MIN() { return getToken(MathParser.OP_MIN, 0); }
		public SumDiffExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterSumDiffExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitSumDiffExpr(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				_localctx = new PassExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(20);
				((PassExprContext)_localctx).schild = sum();
				}
				break;
			case T__4:
				{
				_localctx = new PassExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(21);
				((PassExprContext)_localctx).dchild = frac();
				}
				break;
			case T__7:
			case T__9:
			case T__10:
			case CONSTANT:
			case VARIABLE:
			case REAL:
				{
				_localctx = new PassExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(22);
				((PassExprContext)_localctx).pchild = prod();
				}
				break;
			case OP_ADD:
			case OP_MIN:
				{
				_localctx = new UnaryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(23);
				((UnaryExprContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==OP_ADD || _la==OP_MIN) ) {
					((UnaryExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(24);
				expr(2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(32);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SumDiffExprContext(new ExprContext(_parentctx, _parentState));
					((SumDiffExprContext)_localctx).left = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(27);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(28);
					((SumDiffExprContext)_localctx).op = _input.LT(1);
					_la = _input.LA(1);
					if ( !(_la==OP_ADD || _la==OP_MIN) ) {
						((SumDiffExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(29);
					((SumDiffExprContext)_localctx).right = expr(2);
					}
					} 
				}
				setState(34);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SumContext extends ParserRuleContext {
		public Token index;
		public Token initial;
		public Token final_;
		public ExprContext summand;
		public TerminalNode VARIABLE() { return getToken(MathParser.VARIABLE, 0); }
		public List<TerminalNode> REAL() { return getTokens(MathParser.REAL); }
		public TerminalNode REAL(int i) {
			return getToken(MathParser.REAL, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public SumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sum; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterSum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitSum(this);
		}
	}

	public final SumContext sum() throws RecognitionException {
		SumContext _localctx = new SumContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sum);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(T__0);
			setState(36);
			((SumContext)_localctx).index = match(VARIABLE);
			setState(37);
			match(T__1);
			setState(38);
			((SumContext)_localctx).initial = match(REAL);
			setState(39);
			match(T__2);
			setState(40);
			((SumContext)_localctx).final_ = match(REAL);
			setState(41);
			match(T__3);
			setState(42);
			((SumContext)_localctx).summand = expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FracContext extends ParserRuleContext {
		public ExprContext left;
		public ExprContext right;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public FracContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_frac; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterFrac(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitFrac(this);
		}
	}

	public final FracContext frac() throws RecognitionException {
		FracContext _localctx = new FracContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_frac);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(T__4);
			setState(45);
			((FracContext)_localctx).left = expr(0);
			setState(46);
			match(T__5);
			setState(47);
			((FracContext)_localctx).right = expr(0);
			setState(48);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProdContext extends ParserRuleContext {
		public ProdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prod; }
	 
		public ProdContext() { }
		public void copyFrom(ProdContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnaryProdContext extends ProdContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public UnaryProdContext(ProdContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterUnaryProd(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitUnaryProd(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BinProdContext extends ProdContext {
		public AtomContext left;
		public ProdContext right;
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public ProdContext prod() {
			return getRuleContext(ProdContext.class,0);
		}
		public BinProdContext(ProdContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterBinProd(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitBinProd(this);
		}
	}

	public final ProdContext prod() throws RecognitionException {
		ProdContext _localctx = new ProdContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_prod);
		try {
			setState(57);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new UnaryProdContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				atom(0);
				}
				break;
			case 2:
				_localctx = new BinProdContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				((BinProdContext)_localctx).left = atom(0);
				setState(55);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__7:
				case T__9:
				case T__10:
				case CONSTANT:
				case VARIABLE:
				case REAL:
					{
					setState(52);
					((BinProdContext)_localctx).right = prod();
					}
					break;
				case T__6:
					{
					setState(53);
					match(T__6);
					setState(54);
					((BinProdContext)_localctx).right = prod();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AtomContext extends ParserRuleContext {
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	 
		public AtomContext() { }
		public void copyFrom(AtomContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassAtomContext extends AtomContext {
		public FuncContext fchild;
		public ExprContext echild;
		public FuncContext func() {
			return getRuleContext(FuncContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public PassAtomContext(AtomContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterPassAtom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitPassAtom(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValAtomContext extends AtomContext {
		public Token val;
		public TerminalNode REAL() { return getToken(MathParser.REAL, 0); }
		public TerminalNode CONSTANT() { return getToken(MathParser.CONSTANT, 0); }
		public TerminalNode VARIABLE() { return getToken(MathParser.VARIABLE, 0); }
		public ValAtomContext(AtomContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterValAtom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitValAtom(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PowAtomContext extends AtomContext {
		public AtomContext left;
		public Token op;
		public AtomContext right;
		public List<AtomContext> atom() {
			return getRuleContexts(AtomContext.class);
		}
		public AtomContext atom(int i) {
			return getRuleContext(AtomContext.class,i);
		}
		public TerminalNode OP_POW() { return getToken(MathParser.OP_POW, 0); }
		public PowAtomContext(AtomContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterPowAtom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitPowAtom(this);
		}
	}

	public final AtomContext atom() throws RecognitionException {
		return atom(0);
	}

	private AtomContext atom(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AtomContext _localctx = new AtomContext(_ctx, _parentState);
		AtomContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_atom, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				{
				_localctx = new PassAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(60);
				((PassAtomContext)_localctx).fchild = func();
				}
				break;
			case T__7:
				{
				_localctx = new PassAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(61);
				match(T__7);
				setState(62);
				((PassAtomContext)_localctx).echild = expr(0);
				setState(63);
				match(T__8);
				}
				break;
			case T__9:
				{
				_localctx = new PassAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(65);
				match(T__9);
				setState(66);
				((PassAtomContext)_localctx).echild = expr(0);
				setState(67);
				match(T__3);
				}
				break;
			case CONSTANT:
			case VARIABLE:
			case REAL:
				{
				_localctx = new ValAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(69);
				((ValAtomContext)_localctx).val = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 58720256L) != 0)) ) {
					((ValAtomContext)_localctx).val = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(77);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new PowAtomContext(new AtomContext(_parentctx, _parentState));
					((PowAtomContext)_localctx).left = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_atom);
					setState(72);
					if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
					setState(73);
					((PowAtomContext)_localctx).op = match(OP_POW);
					setState(74);
					((PowAtomContext)_localctx).right = atom(6);
					}
					} 
				}
				setState(79);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncContext extends ParserRuleContext {
		public Fn_nameContext fn_name() {
			return getRuleContext(Fn_nameContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterFunc(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitFunc(this);
		}
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_func);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(T__10);
			setState(81);
			fn_name();
			setState(82);
			match(T__7);
			setState(83);
			expr(0);
			setState(84);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fn_nameContext extends ParserRuleContext {
		public Token val;
		public TerminalNode FN_SIN() { return getToken(MathParser.FN_SIN, 0); }
		public TerminalNode FN_COS() { return getToken(MathParser.FN_COS, 0); }
		public TerminalNode FN_TAN() { return getToken(MathParser.FN_TAN, 0); }
		public TerminalNode FN_ARCSIN() { return getToken(MathParser.FN_ARCSIN, 0); }
		public TerminalNode FN_ARCCOS() { return getToken(MathParser.FN_ARCCOS, 0); }
		public TerminalNode FN_ARCTAN() { return getToken(MathParser.FN_ARCTAN, 0); }
		public TerminalNode FN_EXP() { return getToken(MathParser.FN_EXP, 0); }
		public TerminalNode FN_LOG() { return getToken(MathParser.FN_LOG, 0); }
		public Fn_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fn_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).enterFn_name(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MathListener ) ((MathListener)listener).exitFn_name(this);
		}
	}

	public final Fn_nameContext fn_name() throws RecognitionException {
		Fn_nameContext _localctx = new Fn_nameContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fn_name);
		try {
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FN_SIN:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				((Fn_nameContext)_localctx).val = match(FN_SIN);
				}
				break;
			case FN_COS:
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
				((Fn_nameContext)_localctx).val = match(FN_COS);
				}
				break;
			case FN_TAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(88);
				((Fn_nameContext)_localctx).val = match(FN_TAN);
				}
				break;
			case FN_ARCSIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(89);
				((Fn_nameContext)_localctx).val = match(FN_ARCSIN);
				}
				break;
			case FN_ARCCOS:
				enterOuterAlt(_localctx, 5);
				{
				setState(90);
				((Fn_nameContext)_localctx).val = match(FN_ARCCOS);
				}
				break;
			case FN_ARCTAN:
				enterOuterAlt(_localctx, 6);
				{
				setState(91);
				((Fn_nameContext)_localctx).val = match(FN_ARCTAN);
				}
				break;
			case FN_EXP:
				enterOuterAlt(_localctx, 7);
				{
				setState(92);
				((Fn_nameContext)_localctx).val = match(FN_EXP);
				}
				break;
			case FN_LOG:
				enterOuterAlt(_localctx, 8);
				{
				setState(93);
				((Fn_nameContext)_localctx).val = match(FN_LOG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 5:
			return atom_sempred((AtomContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean atom_sempred(AtomContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001aa\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u001a\b\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001\u001f\b\u0001\n\u0001\f\u0001\"\t\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u00048\b\u0004\u0003\u0004:\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005G\b"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005L\b\u0005\n\u0005"+
		"\f\u0005O\t\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007_\b\u0007\u0001"+
		"\u0007\u0000\u0002\u0002\n\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000"+
		"\u0002\u0001\u0000\f\r\u0001\u0000\u0017\u0019i\u0000\u0010\u0001\u0000"+
		"\u0000\u0000\u0002\u0019\u0001\u0000\u0000\u0000\u0004#\u0001\u0000\u0000"+
		"\u0000\u0006,\u0001\u0000\u0000\u0000\b9\u0001\u0000\u0000\u0000\nF\u0001"+
		"\u0000\u0000\u0000\fP\u0001\u0000\u0000\u0000\u000e^\u0001\u0000\u0000"+
		"\u0000\u0010\u0011\u0003\u0002\u0001\u0000\u0011\u0012\u0005\u0000\u0000"+
		"\u0001\u0012\u0001\u0001\u0000\u0000\u0000\u0013\u0014\u0006\u0001\uffff"+
		"\uffff\u0000\u0014\u001a\u0003\u0004\u0002\u0000\u0015\u001a\u0003\u0006"+
		"\u0003\u0000\u0016\u001a\u0003\b\u0004\u0000\u0017\u0018\u0007\u0000\u0000"+
		"\u0000\u0018\u001a\u0003\u0002\u0001\u0002\u0019\u0013\u0001\u0000\u0000"+
		"\u0000\u0019\u0015\u0001\u0000\u0000\u0000\u0019\u0016\u0001\u0000\u0000"+
		"\u0000\u0019\u0017\u0001\u0000\u0000\u0000\u001a \u0001\u0000\u0000\u0000"+
		"\u001b\u001c\n\u0001\u0000\u0000\u001c\u001d\u0007\u0000\u0000\u0000\u001d"+
		"\u001f\u0003\u0002\u0001\u0002\u001e\u001b\u0001\u0000\u0000\u0000\u001f"+
		"\"\u0001\u0000\u0000\u0000 \u001e\u0001\u0000\u0000\u0000 !\u0001\u0000"+
		"\u0000\u0000!\u0003\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000\u0000"+
		"#$\u0005\u0001\u0000\u0000$%\u0005\u0018\u0000\u0000%&\u0005\u0002\u0000"+
		"\u0000&\'\u0005\u0019\u0000\u0000\'(\u0005\u0003\u0000\u0000()\u0005\u0019"+
		"\u0000\u0000)*\u0005\u0004\u0000\u0000*+\u0003\u0002\u0001\u0000+\u0005"+
		"\u0001\u0000\u0000\u0000,-\u0005\u0005\u0000\u0000-.\u0003\u0002\u0001"+
		"\u0000./\u0005\u0006\u0000\u0000/0\u0003\u0002\u0001\u000001\u0005\u0004"+
		"\u0000\u00001\u0007\u0001\u0000\u0000\u00002:\u0003\n\u0005\u000037\u0003"+
		"\n\u0005\u000048\u0003\b\u0004\u000056\u0005\u0007\u0000\u000068\u0003"+
		"\b\u0004\u000074\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u00008:\u0001"+
		"\u0000\u0000\u000092\u0001\u0000\u0000\u000093\u0001\u0000\u0000\u0000"+
		":\t\u0001\u0000\u0000\u0000;<\u0006\u0005\uffff\uffff\u0000<G\u0003\f"+
		"\u0006\u0000=>\u0005\b\u0000\u0000>?\u0003\u0002\u0001\u0000?@\u0005\t"+
		"\u0000\u0000@G\u0001\u0000\u0000\u0000AB\u0005\n\u0000\u0000BC\u0003\u0002"+
		"\u0001\u0000CD\u0005\u0004\u0000\u0000DG\u0001\u0000\u0000\u0000EG\u0007"+
		"\u0001\u0000\u0000F;\u0001\u0000\u0000\u0000F=\u0001\u0000\u0000\u0000"+
		"FA\u0001\u0000\u0000\u0000FE\u0001\u0000\u0000\u0000GM\u0001\u0000\u0000"+
		"\u0000HI\n\u0005\u0000\u0000IJ\u0005\u000e\u0000\u0000JL\u0003\n\u0005"+
		"\u0006KH\u0001\u0000\u0000\u0000LO\u0001\u0000\u0000\u0000MK\u0001\u0000"+
		"\u0000\u0000MN\u0001\u0000\u0000\u0000N\u000b\u0001\u0000\u0000\u0000"+
		"OM\u0001\u0000\u0000\u0000PQ\u0005\u000b\u0000\u0000QR\u0003\u000e\u0007"+
		"\u0000RS\u0005\b\u0000\u0000ST\u0003\u0002\u0001\u0000TU\u0005\t\u0000"+
		"\u0000U\r\u0001\u0000\u0000\u0000V_\u0005\u000f\u0000\u0000W_\u0005\u0010"+
		"\u0000\u0000X_\u0005\u0011\u0000\u0000Y_\u0005\u0012\u0000\u0000Z_\u0005"+
		"\u0013\u0000\u0000[_\u0005\u0014\u0000\u0000\\_\u0005\u0015\u0000\u0000"+
		"]_\u0005\u0016\u0000\u0000^V\u0001\u0000\u0000\u0000^W\u0001\u0000\u0000"+
		"\u0000^X\u0001\u0000\u0000\u0000^Y\u0001\u0000\u0000\u0000^Z\u0001\u0000"+
		"\u0000\u0000^[\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^]\u0001"+
		"\u0000\u0000\u0000_\u000f\u0001\u0000\u0000\u0000\u0007\u0019 79FM^";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}