// Generated from c:/Dev/GitHub/grapher/new/parser/Math.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, OP_ADD=9, 
		OP_MIN=10, OP_POW=11, FN_SIN=12, FN_COS=13, FN_TAN=14, FN_ARCSIN=15, FN_ARCCOS=16, 
		FN_ARCTAN=17, FN_EXP=18, FN_LOG=19, CONSTANT=20, INPUT=21, REAL=22, WS=23;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "OP_ADD", 
			"OP_MIN", "OP_POW", "FN_SIN", "FN_COS", "FN_TAN", "FN_ARCSIN", "FN_ARCCOS", 
			"FN_ARCTAN", "FN_EXP", "FN_LOG", "CONSTANT", "INPUT", "REAL", "WS"
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
		"\u0004\u0000\u0017\u0099\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013}\b"+
		"\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0005"+
		"\u0015\u0084\b\u0015\n\u0015\f\u0015\u0087\t\u0015\u0003\u0015\u0089\b"+
		"\u0015\u0001\u0015\u0001\u0015\u0004\u0015\u008d\b\u0015\u000b\u0015\f"+
		"\u0015\u008e\u0003\u0015\u0091\b\u0015\u0001\u0016\u0004\u0016\u0094\b"+
		"\u0016\u000b\u0016\f\u0016\u0095\u0001\u0016\u0001\u0016\u0000\u0000\u0017"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017"+
		"\u0001\u0000\u0004\u0002\u0000eeii\u0001\u000019\u0001\u000009\u0003\u0000"+
		"\t\n\r\r  \u009e\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0001/\u0001\u0000\u0000\u0000\u00036\u0001\u0000\u0000\u0000\u0005"+
		"9\u0001\u0000\u0000\u0000\u0007;\u0001\u0000\u0000\u0000\tA\u0001\u0000"+
		"\u0000\u0000\u000bC\u0001\u0000\u0000\u0000\rE\u0001\u0000\u0000\u0000"+
		"\u000fG\u0001\u0000\u0000\u0000\u0011I\u0001\u0000\u0000\u0000\u0013K"+
		"\u0001\u0000\u0000\u0000\u0015M\u0001\u0000\u0000\u0000\u0017O\u0001\u0000"+
		"\u0000\u0000\u0019S\u0001\u0000\u0000\u0000\u001bW\u0001\u0000\u0000\u0000"+
		"\u001d[\u0001\u0000\u0000\u0000\u001fb\u0001\u0000\u0000\u0000!i\u0001"+
		"\u0000\u0000\u0000#p\u0001\u0000\u0000\u0000%t\u0001\u0000\u0000\u0000"+
		"\'|\u0001\u0000\u0000\u0000)~\u0001\u0000\u0000\u0000+\u0088\u0001\u0000"+
		"\u0000\u0000-\u0093\u0001\u0000\u0000\u0000/0\u0005\\\u0000\u000001\u0005"+
		"f\u0000\u000012\u0005r\u0000\u000023\u0005a\u0000\u000034\u0005c\u0000"+
		"\u000045\u0005{\u0000\u00005\u0002\u0001\u0000\u0000\u000067\u0005}\u0000"+
		"\u000078\u0005{\u0000\u00008\u0004\u0001\u0000\u0000\u00009:\u0005}\u0000"+
		"\u0000:\u0006\u0001\u0000\u0000\u0000;<\u0005\\\u0000\u0000<=\u0005c\u0000"+
		"\u0000=>\u0005d\u0000\u0000>?\u0005o\u0000\u0000?@\u0005t\u0000\u0000"+
		"@\b\u0001\u0000\u0000\u0000AB\u0005(\u0000\u0000B\n\u0001\u0000\u0000"+
		"\u0000CD\u0005)\u0000\u0000D\f\u0001\u0000\u0000\u0000EF\u0005{\u0000"+
		"\u0000F\u000e\u0001\u0000\u0000\u0000GH\u0005\\\u0000\u0000H\u0010\u0001"+
		"\u0000\u0000\u0000IJ\u0005+\u0000\u0000J\u0012\u0001\u0000\u0000\u0000"+
		"KL\u0005-\u0000\u0000L\u0014\u0001\u0000\u0000\u0000MN\u0005^\u0000\u0000"+
		"N\u0016\u0001\u0000\u0000\u0000OP\u0005s\u0000\u0000PQ\u0005i\u0000\u0000"+
		"QR\u0005n\u0000\u0000R\u0018\u0001\u0000\u0000\u0000ST\u0005c\u0000\u0000"+
		"TU\u0005o\u0000\u0000UV\u0005s\u0000\u0000V\u001a\u0001\u0000\u0000\u0000"+
		"WX\u0005t\u0000\u0000XY\u0005a\u0000\u0000YZ\u0005n\u0000\u0000Z\u001c"+
		"\u0001\u0000\u0000\u0000[\\\u0005a\u0000\u0000\\]\u0005r\u0000\u0000]"+
		"^\u0005c\u0000\u0000^_\u0005s\u0000\u0000_`\u0005i\u0000\u0000`a\u0005"+
		"n\u0000\u0000a\u001e\u0001\u0000\u0000\u0000bc\u0005a\u0000\u0000cd\u0005"+
		"r\u0000\u0000de\u0005c\u0000\u0000ef\u0005c\u0000\u0000fg\u0005o\u0000"+
		"\u0000gh\u0005s\u0000\u0000h \u0001\u0000\u0000\u0000ij\u0005a\u0000\u0000"+
		"jk\u0005r\u0000\u0000kl\u0005c\u0000\u0000lm\u0005t\u0000\u0000mn\u0005"+
		"a\u0000\u0000no\u0005n\u0000\u0000o\"\u0001\u0000\u0000\u0000pq\u0005"+
		"e\u0000\u0000qr\u0005x\u0000\u0000rs\u0005p\u0000\u0000s$\u0001\u0000"+
		"\u0000\u0000tu\u0005l\u0000\u0000uv\u0005o\u0000\u0000vw\u0005g\u0000"+
		"\u0000w&\u0001\u0000\u0000\u0000x}\u0007\u0000\u0000\u0000yz\u0005\\\u0000"+
		"\u0000z{\u0005p\u0000\u0000{}\u0005i\u0000\u0000|x\u0001\u0000\u0000\u0000"+
		"|y\u0001\u0000\u0000\u0000}(\u0001\u0000\u0000\u0000~\u007f\u0002xz\u0000"+
		"\u007f*\u0001\u0000\u0000\u0000\u0080\u0089\u00050\u0000\u0000\u0081\u0085"+
		"\u0007\u0001\u0000\u0000\u0082\u0084\u0007\u0002\u0000\u0000\u0083\u0082"+
		"\u0001\u0000\u0000\u0000\u0084\u0087\u0001\u0000\u0000\u0000\u0085\u0083"+
		"\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0089"+
		"\u0001\u0000\u0000\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0088\u0080"+
		"\u0001\u0000\u0000\u0000\u0088\u0081\u0001\u0000\u0000\u0000\u0089\u0090"+
		"\u0001\u0000\u0000\u0000\u008a\u008c\u0005.\u0000\u0000\u008b\u008d\u0007"+
		"\u0002\u0000\u0000\u008c\u008b\u0001\u0000\u0000\u0000\u008d\u008e\u0001"+
		"\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008e\u008f\u0001"+
		"\u0000\u0000\u0000\u008f\u0091\u0001\u0000\u0000\u0000\u0090\u008a\u0001"+
		"\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091,\u0001\u0000"+
		"\u0000\u0000\u0092\u0094\u0007\u0003\u0000\u0000\u0093\u0092\u0001\u0000"+
		"\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0093\u0001\u0000"+
		"\u0000\u0000\u0095\u0096\u0001\u0000\u0000\u0000\u0096\u0097\u0001\u0000"+
		"\u0000\u0000\u0097\u0098\u0006\u0016\u0000\u0000\u0098.\u0001\u0000\u0000"+
		"\u0000\b\u0000|\u0085\u0088\u008e\u0090\u0093\u0095\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}