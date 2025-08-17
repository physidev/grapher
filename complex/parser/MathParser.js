// Generated from Math.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MathListener from './MathListener.js';
import MathVisitor from './MathVisitor.js';

const serializedATN = [4,1,25,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,26,8,1,1,
1,1,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,3,4,58,8,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,71,8,5,1,5,1,5,1,5,5,5,76,8,
5,10,5,12,5,79,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,3,7,95,8,7,1,7,0,2,2,10,8,0,2,4,6,8,10,12,14,0,2,1,0,11,12,1,0,22,24,105,
0,16,1,0,0,0,2,25,1,0,0,0,4,35,1,0,0,0,6,44,1,0,0,0,8,57,1,0,0,0,10,70,1,
0,0,0,12,80,1,0,0,0,14,94,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,
0,19,20,6,1,-1,0,20,26,3,4,2,0,21,26,3,6,3,0,22,26,3,8,4,0,23,24,7,0,0,0,
24,26,3,2,1,2,25,19,1,0,0,0,25,21,1,0,0,0,25,22,1,0,0,0,25,23,1,0,0,0,26,
32,1,0,0,0,27,28,10,1,0,0,28,29,7,0,0,0,29,31,3,2,1,2,30,27,1,0,0,0,31,34,
1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,32,1,0,0,0,35,36,5,1,
0,0,36,37,5,23,0,0,37,38,5,2,0,0,38,39,5,24,0,0,39,40,5,3,0,0,40,41,5,24,
0,0,41,42,5,4,0,0,42,43,3,2,1,0,43,5,1,0,0,0,44,45,5,5,0,0,45,46,3,2,1,0,
46,47,5,3,0,0,47,48,3,2,1,0,48,49,5,4,0,0,49,7,1,0,0,0,50,58,3,10,5,0,51,
55,3,10,5,0,52,56,3,8,4,0,53,54,5,6,0,0,54,56,3,8,4,0,55,52,1,0,0,0,55,53,
1,0,0,0,56,58,1,0,0,0,57,50,1,0,0,0,57,51,1,0,0,0,58,9,1,0,0,0,59,60,6,5,
-1,0,60,71,3,12,6,0,61,62,5,7,0,0,62,63,3,2,1,0,63,64,5,8,0,0,64,71,1,0,
0,0,65,66,5,9,0,0,66,67,3,2,1,0,67,68,5,4,0,0,68,71,1,0,0,0,69,71,7,1,0,
0,70,59,1,0,0,0,70,61,1,0,0,0,70,65,1,0,0,0,70,69,1,0,0,0,71,77,1,0,0,0,
72,73,10,5,0,0,73,74,5,13,0,0,74,76,3,10,5,6,75,72,1,0,0,0,76,79,1,0,0,0,
77,75,1,0,0,0,77,78,1,0,0,0,78,11,1,0,0,0,79,77,1,0,0,0,80,81,5,10,0,0,81,
82,3,14,7,0,82,83,5,7,0,0,83,84,3,2,1,0,84,85,5,8,0,0,85,13,1,0,0,0,86,95,
5,14,0,0,87,95,5,15,0,0,88,95,5,16,0,0,89,95,5,17,0,0,90,95,5,18,0,0,91,
95,5,19,0,0,92,95,5,20,0,0,93,95,5,21,0,0,94,86,1,0,0,0,94,87,1,0,0,0,94,
88,1,0,0,0,94,89,1,0,0,0,94,90,1,0,0,0,94,91,1,0,0,0,94,92,1,0,0,0,94,93,
1,0,0,0,95,15,1,0,0,0,7,25,32,55,57,70,77,94];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MathParser extends antlr4.Parser {

    static grammarFileName = "Math.g4";
    static literalNames = [ null, "'\\sum_{'", "'='", "'}{'", "'}'", "'\\frac{'", 
                            "'\\cdot'", "'('", "')'", "'{'", "'\\'", "'+'", 
                            "'-'", "'^'", "'sin'", "'cos'", "'tan'", "'arcsin'", 
                            "'arccos'", "'arctan'", "'exp'", "'log'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "OP_ADD", "OP_MIN", "OP_POW", 
                             "FN_SIN", "FN_COS", "FN_TAN", "FN_ARCSIN", 
                             "FN_ARCCOS", "FN_ARCTAN", "FN_EXP", "FN_LOG", 
                             "CONSTANT", "VARIABLE", "REAL", "WS" ];
    static ruleNames = [ "prog", "expr", "sum", "frac", "prod", "atom", 
                         "func", "fn_name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MathParser.ruleNames;
        this.literalNames = MathParser.literalNames;
        this.symbolicNames = MathParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 5:
    	    		return this.atom_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    atom_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MathParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.expr(0);
	        this.state = 17;
	        this.match(MathParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MathParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new PassExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 20;
	            localctx.schild = this.sum();
	            break;
	        case 5:
	            localctx = new PassExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            localctx.dchild = this.frac();
	            break;
	        case 7:
	        case 9:
	        case 10:
	        case 22:
	        case 23:
	        case 24:
	            localctx = new PassExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 22;
	            localctx.pchild = this.prod();
	            break;
	        case 11:
	        case 12:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 23;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 24;
	            this.expr(2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SumDiffExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, MathParser.RULE_expr);
	                this.state = 27;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 28;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===11 || _la===12)) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 29;
	                localctx.right = this.expr(2); 
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	sum() {
	    let localctx = new SumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MathParser.RULE_sum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(MathParser.T__0);
	        this.state = 36;
	        localctx.index = this.match(MathParser.VARIABLE);
	        this.state = 37;
	        this.match(MathParser.T__1);
	        this.state = 38;
	        localctx.initial = this.match(MathParser.REAL);
	        this.state = 39;
	        this.match(MathParser.T__2);
	        this.state = 40;
	        localctx.final_ = this.match(MathParser.REAL);
	        this.state = 41;
	        this.match(MathParser.T__3);
	        this.state = 42;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	frac() {
	    let localctx = new FracContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MathParser.RULE_frac);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(MathParser.T__4);
	        this.state = 45;
	        localctx.left = this.expr(0);
	        this.state = 46;
	        this.match(MathParser.T__2);
	        this.state = 47;
	        localctx.right = this.expr(0);
	        this.state = 48;
	        this.match(MathParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prod() {
	    let localctx = new ProdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MathParser.RULE_prod);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryProdContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.atom(0);
	            break;

	        case 2:
	            localctx = new BinProdContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            localctx.left = this.atom(0);
	            this.state = 55;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 7:
	            case 9:
	            case 10:
	            case 22:
	            case 23:
	            case 24:
	                this.state = 52;
	                localctx.right = this.prod();
	                break;
	            case 6:
	                this.state = 53;
	                this.match(MathParser.T__5);
	                this.state = 54;
	                localctx.right = this.prod();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	atom(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AtomContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, MathParser.RULE_atom, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new PassAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 60;
	            localctx.fchild = this.func();
	            break;
	        case 7:
	            localctx = new PassAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 61;
	            this.match(MathParser.T__6);
	            this.state = 62;
	            localctx.echild = this.expr(0);
	            this.state = 63;
	            this.match(MathParser.T__7);
	            break;
	        case 9:
	            localctx = new PassAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(MathParser.T__8);
	            this.state = 66;
	            localctx.echild = this.expr(0);
	            this.state = 67;
	            this.match(MathParser.T__3);
	            break;
	        case 22:
	        case 23:
	        case 24:
	            localctx = new ValAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 69;
	            localctx.val = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360128) !== 0))) {
	                localctx.val = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PowAtomContext(this, new AtomContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, MathParser.RULE_atom);
	                this.state = 72;
	                if (!( this.precpred(this._ctx, 5))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                }
	                this.state = 73;
	                localctx.op = this.match(MathParser.OP_POW);
	                this.state = 74;
	                localctx.right = this.atom(6); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MathParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(MathParser.T__9);
	        this.state = 81;
	        this.fn_name();
	        this.state = 82;
	        this.match(MathParser.T__6);
	        this.state = 83;
	        this.expr(0);
	        this.state = 84;
	        this.match(MathParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fn_name() {
	    let localctx = new Fn_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MathParser.RULE_fn_name);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            localctx.val = this.match(MathParser.FN_SIN);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            localctx.val = this.match(MathParser.FN_COS);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            localctx.val = this.match(MathParser.FN_TAN);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            localctx.val = this.match(MathParser.FN_ARCSIN);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 90;
	            localctx.val = this.match(MathParser.FN_ARCCOS);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 91;
	            localctx.val = this.match(MathParser.FN_ARCTAN);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 92;
	            localctx.val = this.match(MathParser.FN_EXP);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 93;
	            localctx.val = this.match(MathParser.FN_LOG);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MathParser.EOF = antlr4.Token.EOF;
MathParser.T__0 = 1;
MathParser.T__1 = 2;
MathParser.T__2 = 3;
MathParser.T__3 = 4;
MathParser.T__4 = 5;
MathParser.T__5 = 6;
MathParser.T__6 = 7;
MathParser.T__7 = 8;
MathParser.T__8 = 9;
MathParser.T__9 = 10;
MathParser.OP_ADD = 11;
MathParser.OP_MIN = 12;
MathParser.OP_POW = 13;
MathParser.FN_SIN = 14;
MathParser.FN_COS = 15;
MathParser.FN_TAN = 16;
MathParser.FN_ARCSIN = 17;
MathParser.FN_ARCCOS = 18;
MathParser.FN_ARCTAN = 19;
MathParser.FN_EXP = 20;
MathParser.FN_LOG = 21;
MathParser.CONSTANT = 22;
MathParser.VARIABLE = 23;
MathParser.REAL = 24;
MathParser.WS = 25;

MathParser.RULE_prog = 0;
MathParser.RULE_expr = 1;
MathParser.RULE_sum = 2;
MathParser.RULE_frac = 3;
MathParser.RULE_prod = 4;
MathParser.RULE_atom = 5;
MathParser.RULE_func = 6;
MathParser.RULE_fn_name = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_prog;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(MathParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnaryExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	OP_ADD() {
	    return this.getToken(MathParser.OP_ADD, 0);
	};

	OP_MIN() {
	    return this.getToken(MathParser.OP_MIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterUnaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitUnaryExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitUnaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.UnaryExprContext = UnaryExprContext;

class PassExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.schild = null;;
        this.dchild = null;;
        this.pchild = null;;
        super.copyFrom(ctx);
    }

	sum() {
	    return this.getTypedRuleContext(SumContext,0);
	};

	frac() {
	    return this.getTypedRuleContext(FracContext,0);
	};

	prod() {
	    return this.getTypedRuleContext(ProdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterPassExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitPassExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitPassExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.PassExprContext = PassExprContext;

class SumDiffExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.op = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	OP_ADD() {
	    return this.getToken(MathParser.OP_ADD, 0);
	};

	OP_MIN() {
	    return this.getToken(MathParser.OP_MIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterSumDiffExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitSumDiffExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitSumDiffExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.SumDiffExprContext = SumDiffExprContext;

class SumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_sum;
        this.index = null;
        this.initial = null;
        this.final_ = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	VARIABLE() {
	    return this.getToken(MathParser.VARIABLE, 0);
	};

	REAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MathParser.REAL);
	    } else {
	        return this.getToken(MathParser.REAL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterSum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitSum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitSum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FracContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_frac;
        this.left = null;
        this.right = null;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterFrac(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitFrac(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitFrac(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_prod;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnaryProdContext extends ProdContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterUnaryProd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitUnaryProd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitUnaryProd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.UnaryProdContext = UnaryProdContext;

class BinProdContext extends ProdContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	prod() {
	    return this.getTypedRuleContext(ProdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterBinProd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitBinProd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitBinProd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.BinProdContext = BinProdContext;

class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_atom;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PassAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        this.fchild = null;;
        this.echild = null;;
        super.copyFrom(ctx);
    }

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterPassAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitPassAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitPassAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.PassAtomContext = PassAtomContext;

class ValAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        this.val = null;;
        super.copyFrom(ctx);
    }

	REAL() {
	    return this.getToken(MathParser.REAL, 0);
	};

	CONSTANT() {
	    return this.getToken(MathParser.CONSTANT, 0);
	};

	VARIABLE() {
	    return this.getToken(MathParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterValAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitValAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitValAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.ValAtomContext = ValAtomContext;

class PowAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.op = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	OP_POW() {
	    return this.getToken(MathParser.OP_POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterPowAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitPowAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitPowAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MathParser.PowAtomContext = PowAtomContext;

class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_func;
    }

	fn_name() {
	    return this.getTypedRuleContext(Fn_nameContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitFunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Fn_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MathParser.RULE_fn_name;
        this.val = null;
    }

	FN_SIN() {
	    return this.getToken(MathParser.FN_SIN, 0);
	};

	FN_COS() {
	    return this.getToken(MathParser.FN_COS, 0);
	};

	FN_TAN() {
	    return this.getToken(MathParser.FN_TAN, 0);
	};

	FN_ARCSIN() {
	    return this.getToken(MathParser.FN_ARCSIN, 0);
	};

	FN_ARCCOS() {
	    return this.getToken(MathParser.FN_ARCCOS, 0);
	};

	FN_ARCTAN() {
	    return this.getToken(MathParser.FN_ARCTAN, 0);
	};

	FN_EXP() {
	    return this.getToken(MathParser.FN_EXP, 0);
	};

	FN_LOG() {
	    return this.getToken(MathParser.FN_LOG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.enterFn_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MathListener ) {
	        listener.exitFn_name(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MathVisitor ) {
	        return visitor.visitFn_name(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MathParser.ProgContext = ProgContext; 
MathParser.ExprContext = ExprContext; 
MathParser.SumContext = SumContext; 
MathParser.FracContext = FracContext; 
MathParser.ProdContext = ProdContext; 
MathParser.AtomContext = AtomContext; 
MathParser.FuncContext = FuncContext; 
MathParser.Fn_nameContext = Fn_nameContext; 
