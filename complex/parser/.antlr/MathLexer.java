// Generated from c:/Dev/GitHub/grapher/complex/parser/Math.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MathLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, OP_ADD=12, OP_MIN=13, OP_POW=14, FN_SIN=15, FN_COS=16, 
		FN_TAN=17, FN_ARCSIN=18, FN_ARCCOS=19, FN_ARCTAN=20, FN_EXP=21, FN_LOG=22, 
		CONSTANT=23, VARIABLE=24, REAL=25, WS=26;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "OP_ADD", "OP_MIN", "OP_POW", "FN_SIN", "FN_COS", "FN_TAN", 
			"FN_ARCSIN", "FN_ARCCOS", "FN_ARCTAN", "FN_EXP", "FN_LOG", "CONSTANT", 
			"VARIABLE", "REAL", "WS"
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


	public MathLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Math.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u001a\u00ac\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0003\u0016\u0090\b\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0005\u0018\u0097\b\u0018\n\u0018\f\u0018\u009a\t\u0018"+
		"\u0003\u0018\u009c\b\u0018\u0001\u0018\u0001\u0018\u0004\u0018\u00a0\b"+
		"\u0018\u000b\u0018\f\u0018\u00a1\u0003\u0018\u00a4\b\u0018\u0001\u0019"+
		"\u0004\u0019\u00a7\b\u0019\u000b\u0019\f\u0019\u00a8\u0001\u0019\u0001"+
		"\u0019\u0000\u0000\u001a\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a\u0001\u0000\u0005\u0002"+
		"\u0000eeii\u0003\u0000jkmnxz\u0001\u000019\u0001\u000009\u0003\u0000\t"+
		"\n\r\r  \u00b1\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%"+
		"\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u0000"+
		"3\u0001\u0000\u0000\u0000\u00015\u0001\u0000\u0000\u0000\u0003<\u0001"+
		"\u0000\u0000\u0000\u0005>\u0001\u0000\u0000\u0000\u0007B\u0001\u0000\u0000"+
		"\u0000\tD\u0001\u0000\u0000\u0000\u000bK\u0001\u0000\u0000\u0000\rN\u0001"+
		"\u0000\u0000\u0000\u000fT\u0001\u0000\u0000\u0000\u0011V\u0001\u0000\u0000"+
		"\u0000\u0013X\u0001\u0000\u0000\u0000\u0015Z\u0001\u0000\u0000\u0000\u0017"+
		"\\\u0001\u0000\u0000\u0000\u0019^\u0001\u0000\u0000\u0000\u001b`\u0001"+
		"\u0000\u0000\u0000\u001db\u0001\u0000\u0000\u0000\u001ff\u0001\u0000\u0000"+
		"\u0000!j\u0001\u0000\u0000\u0000#n\u0001\u0000\u0000\u0000%u\u0001\u0000"+
		"\u0000\u0000\'|\u0001\u0000\u0000\u0000)\u0083\u0001\u0000\u0000\u0000"+
		"+\u0087\u0001\u0000\u0000\u0000-\u008f\u0001\u0000\u0000\u0000/\u0091"+
		"\u0001\u0000\u0000\u00001\u009b\u0001\u0000\u0000\u00003\u00a6\u0001\u0000"+
		"\u0000\u000056\u0005\\\u0000\u000067\u0005s\u0000\u000078\u0005u\u0000"+
		"\u000089\u0005m\u0000\u00009:\u0005_\u0000\u0000:;\u0005{\u0000\u0000"+
		";\u0002\u0001\u0000\u0000\u0000<=\u0005=\u0000\u0000=\u0004\u0001\u0000"+
		"\u0000\u0000>?\u0005}\u0000\u0000?@\u0005^\u0000\u0000@A\u0005{\u0000"+
		"\u0000A\u0006\u0001\u0000\u0000\u0000BC\u0005}\u0000\u0000C\b\u0001\u0000"+
		"\u0000\u0000DE\u0005\\\u0000\u0000EF\u0005f\u0000\u0000FG\u0005r\u0000"+
		"\u0000GH\u0005a\u0000\u0000HI\u0005c\u0000\u0000IJ\u0005{\u0000\u0000"+
		"J\n\u0001\u0000\u0000\u0000KL\u0005}\u0000\u0000LM\u0005{\u0000\u0000"+
		"M\f\u0001\u0000\u0000\u0000NO\u0005\\\u0000\u0000OP\u0005c\u0000\u0000"+
		"PQ\u0005d\u0000\u0000QR\u0005o\u0000\u0000RS\u0005t\u0000\u0000S\u000e"+
		"\u0001\u0000\u0000\u0000TU\u0005(\u0000\u0000U\u0010\u0001\u0000\u0000"+
		"\u0000VW\u0005)\u0000\u0000W\u0012\u0001\u0000\u0000\u0000XY\u0005{\u0000"+
		"\u0000Y\u0014\u0001\u0000\u0000\u0000Z[\u0005\\\u0000\u0000[\u0016\u0001"+
		"\u0000\u0000\u0000\\]\u0005+\u0000\u0000]\u0018\u0001\u0000\u0000\u0000"+
		"^_\u0005-\u0000\u0000_\u001a\u0001\u0000\u0000\u0000`a\u0005^\u0000\u0000"+
		"a\u001c\u0001\u0000\u0000\u0000bc\u0005s\u0000\u0000cd\u0005i\u0000\u0000"+
		"de\u0005n\u0000\u0000e\u001e\u0001\u0000\u0000\u0000fg\u0005c\u0000\u0000"+
		"gh\u0005o\u0000\u0000hi\u0005s\u0000\u0000i \u0001\u0000\u0000\u0000j"+
		"k\u0005t\u0000\u0000kl\u0005a\u0000\u0000lm\u0005n\u0000\u0000m\"\u0001"+
		"\u0000\u0000\u0000no\u0005a\u0000\u0000op\u0005r\u0000\u0000pq\u0005c"+
		"\u0000\u0000qr\u0005s\u0000\u0000rs\u0005i\u0000\u0000st\u0005n\u0000"+
		"\u0000t$\u0001\u0000\u0000\u0000uv\u0005a\u0000\u0000vw\u0005r\u0000\u0000"+
		"wx\u0005c\u0000\u0000xy\u0005c\u0000\u0000yz\u0005o\u0000\u0000z{\u0005"+
		"s\u0000\u0000{&\u0001\u0000\u0000\u0000|}\u0005a\u0000\u0000}~\u0005r"+
		"\u0000\u0000~\u007f\u0005c\u0000\u0000\u007f\u0080\u0005t\u0000\u0000"+
		"\u0080\u0081\u0005a\u0000\u0000\u0081\u0082\u0005n\u0000\u0000\u0082("+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0005e\u0000\u0000\u0084\u0085\u0005"+
		"x\u0000\u0000\u0085\u0086\u0005p\u0000\u0000\u0086*\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0005l\u0000\u0000\u0088\u0089\u0005o\u0000\u0000\u0089"+
		"\u008a\u0005g\u0000\u0000\u008a,\u0001\u0000\u0000\u0000\u008b\u0090\u0007"+
		"\u0000\u0000\u0000\u008c\u008d\u0005\\\u0000\u0000\u008d\u008e\u0005p"+
		"\u0000\u0000\u008e\u0090\u0005i\u0000\u0000\u008f\u008b\u0001\u0000\u0000"+
		"\u0000\u008f\u008c\u0001\u0000\u0000\u0000\u0090.\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0007\u0001\u0000\u0000\u00920\u0001\u0000\u0000\u0000\u0093"+
		"\u009c\u00050\u0000\u0000\u0094\u0098\u0007\u0002\u0000\u0000\u0095\u0097"+
		"\u0007\u0003\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u009a"+
		"\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099"+
		"\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000\u0000\u009a\u0098"+
		"\u0001\u0000\u0000\u0000\u009b\u0093\u0001\u0000\u0000\u0000\u009b\u0094"+
		"\u0001\u0000\u0000\u0000\u009c\u00a3\u0001\u0000\u0000\u0000\u009d\u009f"+
		"\u0005.\u0000\u0000\u009e\u00a0\u0007\u0003\u0000\u0000\u009f\u009e\u0001"+
		"\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u009f\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a4\u0001"+
		"\u0000\u0000\u0000\u00a3\u009d\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001"+
		"\u0000\u0000\u0000\u00a42\u0001\u0000\u0000\u0000\u00a5\u00a7\u0007\u0004"+
		"\u0000\u0000\u00a6\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000"+
		"\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00ab\u0006\u0019"+
		"\u0000\u0000\u00ab4\u0001\u0000\u0000\u0000\b\u0000\u008f\u0098\u009b"+
		"\u00a1\u00a3\u00a6\u00a8\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}