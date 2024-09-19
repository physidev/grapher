// Generated from c:/Dev/GitHub/grapher/new/parser/Math.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, OP_ADD=9, 
		OP_MIN=10, OP_POW=11, FN_SIN=12, FN_COS=13, FN_TAN=14, FN_ARCSIN=15, FN_ARCCOS=16, 
		FN_ARCTAN=17, FN_EXP=18, FN_LOG=19, CONSTANT=20, INPUT=21, REAL=22, WS=23;
	public static final int
		RULE_prog = 0, RULE_expr = 1, RULE_frac = 2, RULE_prod = 3, RULE_atom = 4, 
		RULE_func = 5, RULE_fn_name = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "expr", "frac", "prod", "atom", "func", "fn_name"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'\\frac{'", "'}{'", "'}'", "'\\cdot'", "'('", "')'", "'{'", "'\\'", 
			"'+'", "'-'", "'^'", "'sin'", "'cos'", "'tan'", "'arcsin'", "'arccos'", 
			"'arctan'", "'exp'", "'log'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "OP_ADD", "OP_MIN", 
			"OP_POW", "FN_SIN", "FN_COS", "FN_TAN", "FN_ARCSIN", "FN_ARCCOS", "FN_ARCTAN", 
			"FN_EXP", "FN_LOG", "CONSTANT", "INPUT", "REAL", "WS"
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
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			expr(0);
			setState(15);
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
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassExprContext extends ExprContext {
		public FracContext dchild;
		public ProdContext pchild;
		public FracContext frac() {
			return getRuleContext(FracContext.class,0);
		}
		public ProdContext prod() {
			return getRuleContext(ProdContext.class,0);
		}
		public PassExprContext(ExprContext ctx) { copyFrom(ctx); }
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
			setState(22);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				_localctx = new PassExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(18);
				((PassExprContext)_localctx).dchild = frac();
				}
				break;
			case T__4:
			case T__6:
			case T__7:
			case CONSTANT:
			case INPUT:
			case REAL:
				{
				_localctx = new PassExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(19);
				((PassExprContext)_localctx).pchild = prod();
				}
				break;
			case OP_ADD:
			case OP_MIN:
				{
				_localctx = new UnaryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(20);
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
				setState(21);
				expr(2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(29);
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
					setState(24);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(25);
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
					setState(26);
					((SumDiffExprContext)_localctx).right = expr(2);
					}
					} 
				}
				setState(31);
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
	}

	public final FracContext frac() throws RecognitionException {
		FracContext _localctx = new FracContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_frac);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			match(T__0);
			setState(33);
			((FracContext)_localctx).left = expr(0);
			setState(34);
			match(T__1);
			setState(35);
			((FracContext)_localctx).right = expr(0);
			setState(36);
			match(T__2);
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
	}

	public final ProdContext prod() throws RecognitionException {
		ProdContext _localctx = new ProdContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_prod);
		try {
			setState(45);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new UnaryProdContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				atom(0);
				}
				break;
			case 2:
				_localctx = new BinProdContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				((BinProdContext)_localctx).left = atom(0);
				setState(43);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__4:
				case T__6:
				case T__7:
				case CONSTANT:
				case INPUT:
				case REAL:
					{
					setState(40);
					((BinProdContext)_localctx).right = prod();
					}
					break;
				case T__3:
					{
					setState(41);
					match(T__3);
					setState(42);
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
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValAtomContext extends AtomContext {
		public Token val;
		public TerminalNode REAL() { return getToken(MathParser.REAL, 0); }
		public TerminalNode CONSTANT() { return getToken(MathParser.CONSTANT, 0); }
		public TerminalNode INPUT() { return getToken(MathParser.INPUT, 0); }
		public ValAtomContext(AtomContext ctx) { copyFrom(ctx); }
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
	}

	public final AtomContext atom() throws RecognitionException {
		return atom(0);
	}

	private AtomContext atom(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AtomContext _localctx = new AtomContext(_ctx, _parentState);
		AtomContext _prevctx = _localctx;
		int _startState = 8;
		enterRecursionRule(_localctx, 8, RULE_atom, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				{
				_localctx = new PassAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(48);
				((PassAtomContext)_localctx).fchild = func();
				}
				break;
			case T__4:
				{
				_localctx = new PassAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(49);
				match(T__4);
				setState(50);
				((PassAtomContext)_localctx).echild = expr(0);
				setState(51);
				match(T__5);
				}
				break;
			case T__6:
				{
				_localctx = new PassAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(53);
				match(T__6);
				setState(54);
				((PassAtomContext)_localctx).echild = expr(0);
				setState(55);
				match(T__2);
				}
				break;
			case CONSTANT:
			case INPUT:
			case REAL:
				{
				_localctx = new ValAtomContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(57);
				((ValAtomContext)_localctx).val = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7340032L) != 0)) ) {
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
			setState(65);
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
					setState(60);
					if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
					setState(61);
					((PowAtomContext)_localctx).op = match(OP_POW);
					setState(62);
					((PowAtomContext)_localctx).right = atom(6);
					}
					} 
				}
				setState(67);
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
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_func);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(T__7);
			setState(69);
			fn_name();
			setState(70);
			match(T__4);
			setState(71);
			expr(0);
			setState(72);
			match(T__5);
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
	}

	public final Fn_nameContext fn_name() throws RecognitionException {
		Fn_nameContext _localctx = new Fn_nameContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fn_name);
		try {
			setState(82);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FN_SIN:
				enterOuterAlt(_localctx, 1);
				{
				setState(74);
				((Fn_nameContext)_localctx).val = match(FN_SIN);
				}
				break;
			case FN_COS:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				((Fn_nameContext)_localctx).val = match(FN_COS);
				}
				break;
			case FN_TAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(76);
				((Fn_nameContext)_localctx).val = match(FN_TAN);
				}
				break;
			case FN_ARCSIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(77);
				((Fn_nameContext)_localctx).val = match(FN_ARCSIN);
				}
				break;
			case FN_ARCCOS:
				enterOuterAlt(_localctx, 5);
				{
				setState(78);
				((Fn_nameContext)_localctx).val = match(FN_ARCCOS);
				}
				break;
			case FN_ARCTAN:
				enterOuterAlt(_localctx, 6);
				{
				setState(79);
				((Fn_nameContext)_localctx).val = match(FN_ARCTAN);
				}
				break;
			case FN_EXP:
				enterOuterAlt(_localctx, 7);
				{
				setState(80);
				((Fn_nameContext)_localctx).val = match(FN_EXP);
				}
				break;
			case FN_LOG:
				enterOuterAlt(_localctx, 8);
				{
				setState(81);
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
		case 4:
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
		"\u0004\u0001\u0017U\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001\u0017\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001\u001c"+
		"\b\u0001\n\u0001\f\u0001\u001f\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003,\b\u0003\u0003\u0003.\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004;\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004@\b\u0004\n\u0004"+
		"\f\u0004C\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006S\b\u0006\u0001"+
		"\u0006\u0000\u0002\u0002\b\u0007\u0000\u0002\u0004\u0006\b\n\f\u0000\u0002"+
		"\u0001\u0000\t\n\u0001\u0000\u0014\u0016]\u0000\u000e\u0001\u0000\u0000"+
		"\u0000\u0002\u0016\u0001\u0000\u0000\u0000\u0004 \u0001\u0000\u0000\u0000"+
		"\u0006-\u0001\u0000\u0000\u0000\b:\u0001\u0000\u0000\u0000\nD\u0001\u0000"+
		"\u0000\u0000\fR\u0001\u0000\u0000\u0000\u000e\u000f\u0003\u0002\u0001"+
		"\u0000\u000f\u0010\u0005\u0000\u0000\u0001\u0010\u0001\u0001\u0000\u0000"+
		"\u0000\u0011\u0012\u0006\u0001\uffff\uffff\u0000\u0012\u0017\u0003\u0004"+
		"\u0002\u0000\u0013\u0017\u0003\u0006\u0003\u0000\u0014\u0015\u0007\u0000"+
		"\u0000\u0000\u0015\u0017\u0003\u0002\u0001\u0002\u0016\u0011\u0001\u0000"+
		"\u0000\u0000\u0016\u0013\u0001\u0000\u0000\u0000\u0016\u0014\u0001\u0000"+
		"\u0000\u0000\u0017\u001d\u0001\u0000\u0000\u0000\u0018\u0019\n\u0001\u0000"+
		"\u0000\u0019\u001a\u0007\u0000\u0000\u0000\u001a\u001c\u0003\u0002\u0001"+
		"\u0002\u001b\u0018\u0001\u0000\u0000\u0000\u001c\u001f\u0001\u0000\u0000"+
		"\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000\u0000"+
		"\u0000\u001e\u0003\u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000"+
		"\u0000 !\u0005\u0001\u0000\u0000!\"\u0003\u0002\u0001\u0000\"#\u0005\u0002"+
		"\u0000\u0000#$\u0003\u0002\u0001\u0000$%\u0005\u0003\u0000\u0000%\u0005"+
		"\u0001\u0000\u0000\u0000&.\u0003\b\u0004\u0000\'+\u0003\b\u0004\u0000"+
		"(,\u0003\u0006\u0003\u0000)*\u0005\u0004\u0000\u0000*,\u0003\u0006\u0003"+
		"\u0000+(\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000,.\u0001\u0000"+
		"\u0000\u0000-&\u0001\u0000\u0000\u0000-\'\u0001\u0000\u0000\u0000.\u0007"+
		"\u0001\u0000\u0000\u0000/0\u0006\u0004\uffff\uffff\u00000;\u0003\n\u0005"+
		"\u000012\u0005\u0005\u0000\u000023\u0003\u0002\u0001\u000034\u0005\u0006"+
		"\u0000\u00004;\u0001\u0000\u0000\u000056\u0005\u0007\u0000\u000067\u0003"+
		"\u0002\u0001\u000078\u0005\u0003\u0000\u00008;\u0001\u0000\u0000\u0000"+
		"9;\u0007\u0001\u0000\u0000:/\u0001\u0000\u0000\u0000:1\u0001\u0000\u0000"+
		"\u0000:5\u0001\u0000\u0000\u0000:9\u0001\u0000\u0000\u0000;A\u0001\u0000"+
		"\u0000\u0000<=\n\u0005\u0000\u0000=>\u0005\u000b\u0000\u0000>@\u0003\b"+
		"\u0004\u0006?<\u0001\u0000\u0000\u0000@C\u0001\u0000\u0000\u0000A?\u0001"+
		"\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B\t\u0001\u0000\u0000\u0000"+
		"CA\u0001\u0000\u0000\u0000DE\u0005\b\u0000\u0000EF\u0003\f\u0006\u0000"+
		"FG\u0005\u0005\u0000\u0000GH\u0003\u0002\u0001\u0000HI\u0005\u0006\u0000"+
		"\u0000I\u000b\u0001\u0000\u0000\u0000JS\u0005\f\u0000\u0000KS\u0005\r"+
		"\u0000\u0000LS\u0005\u000e\u0000\u0000MS\u0005\u000f\u0000\u0000NS\u0005"+
		"\u0010\u0000\u0000OS\u0005\u0011\u0000\u0000PS\u0005\u0012\u0000\u0000"+
		"QS\u0005\u0013\u0000\u0000RJ\u0001\u0000\u0000\u0000RK\u0001\u0000\u0000"+
		"\u0000RL\u0001\u0000\u0000\u0000RM\u0001\u0000\u0000\u0000RN\u0001\u0000"+
		"\u0000\u0000RO\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000RQ\u0001"+
		"\u0000\u0000\u0000S\r\u0001\u0000\u0000\u0000\u0007\u0016\u001d+-:AR";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}