// Generated from Math.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MathListener from './MathListener.js';
import MathVisitor from './MathVisitor.js';

const serializedATN = [4,1,23,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,23,8,1,1,1,1,1,1,1,5,
1,28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,
3,44,8,3,3,3,46,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,59,8,
4,1,4,1,4,1,4,5,4,64,8,4,10,4,12,4,67,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,83,8,6,1,6,0,2,2,8,7,0,2,4,6,8,10,12,0,2,1,
0,9,10,1,0,20,22,93,0,14,1,0,0,0,2,22,1,0,0,0,4,32,1,0,0,0,6,45,1,0,0,0,
8,58,1,0,0,0,10,68,1,0,0,0,12,82,1,0,0,0,14,15,3,2,1,0,15,16,5,0,0,1,16,
1,1,0,0,0,17,18,6,1,-1,0,18,23,3,4,2,0,19,23,3,6,3,0,20,21,7,0,0,0,21,23,
3,2,1,2,22,17,1,0,0,0,22,19,1,0,0,0,22,20,1,0,0,0,23,29,1,0,0,0,24,25,10,
1,0,0,25,26,7,0,0,0,26,28,3,2,1,2,27,24,1,0,0,0,28,31,1,0,0,0,29,27,1,0,
0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,0,0,32,33,5,1,0,0,33,34,3,2,1,0,
34,35,5,2,0,0,35,36,3,2,1,0,36,37,5,3,0,0,37,5,1,0,0,0,38,46,3,8,4,0,39,
43,3,8,4,0,40,44,3,6,3,0,41,42,5,4,0,0,42,44,3,6,3,0,43,40,1,0,0,0,43,41,
1,0,0,0,44,46,1,0,0,0,45,38,1,0,0,0,45,39,1,0,0,0,46,7,1,0,0,0,47,48,6,4,
-1,0,48,59,3,10,5,0,49,50,5,5,0,0,50,51,3,2,1,0,51,52,5,6,0,0,52,59,1,0,
0,0,53,54,5,7,0,0,54,55,3,2,1,0,55,56,5,3,0,0,56,59,1,0,0,0,57,59,7,1,0,
0,58,47,1,0,0,0,58,49,1,0,0,0,58,53,1,0,0,0,58,57,1,0,0,0,59,65,1,0,0,0,
60,61,10,5,0,0,61,62,5,11,0,0,62,64,3,8,4,6,63,60,1,0,0,0,64,67,1,0,0,0,
65,63,1,0,0,0,65,66,1,0,0,0,66,9,1,0,0,0,67,65,1,0,0,0,68,69,5,8,0,0,69,
70,3,12,6,0,70,71,5,5,0,0,71,72,3,2,1,0,72,73,5,6,0,0,73,11,1,0,0,0,74,83,
5,12,0,0,75,83,5,13,0,0,76,83,5,14,0,0,77,83,5,15,0,0,78,83,5,16,0,0,79,
83,5,17,0,0,80,83,5,18,0,0,81,83,5,19,0,0,82,74,1,0,0,0,82,75,1,0,0,0,82,
76,1,0,0,0,82,77,1,0,0,0,82,78,1,0,0,0,82,79,1,0,0,0,82,80,1,0,0,0,82,81,
1,0,0,0,83,13,1,0,0,0,7,22,29,43,45,58,65,82];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MathParser extends antlr4.Parser {

    static grammarFileName = "Math.g4";
    static literalNames = [ null, "'\\frac{'", "'}{'", "'}'", "'\\cdot'", 
                            "'('", "')'", "'{'", "'\\'", "'+'", "'-'", "'^'", 
                            "'sin'", "'cos'", "'tan'", "'arcsin'", "'arccos'", 
                            "'arctan'", "'exp'", "'log'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "OP_ADD", "OP_MIN", "OP_POW", "FN_SIN", 
                             "FN_COS", "FN_TAN", "FN_ARCSIN", "FN_ARCCOS", 
                             "FN_ARCTAN", "FN_EXP", "FN_LOG", "CONSTANT", 
                             "INPUT", "REAL", "WS" ];
    static ruleNames = [ "prog", "expr", "frac", "prod", "atom", "func", 
                         "fn_name" ];

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
    	case 4:
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
	        this.state = 14;
	        this.expr(0);
	        this.state = 15;
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
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new PassExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 18;
	            localctx.dchild = this.frac();
	            break;
	        case 5:
	        case 7:
	        case 8:
	        case 20:
	        case 21:
	        case 22:
	            localctx = new PassExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 19;
	            localctx.pchild = this.prod();
	            break;
	        case 9:
	        case 10:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 20;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 21;
	            this.expr(2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 29;
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
	                this.state = 24;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 25;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===9 || _la===10)) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 26;
	                localctx.right = this.expr(2); 
	            }
	            this.state = 31;
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



	frac() {
	    let localctx = new FracContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MathParser.RULE_frac);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(MathParser.T__0);
	        this.state = 33;
	        localctx.left = this.expr(0);
	        this.state = 34;
	        this.match(MathParser.T__1);
	        this.state = 35;
	        localctx.right = this.expr(0);
	        this.state = 36;
	        this.match(MathParser.T__2);
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
	    this.enterRule(localctx, 6, MathParser.RULE_prod);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryProdContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.atom(0);
	            break;

	        case 2:
	            localctx = new BinProdContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            localctx.left = this.atom(0);
	            this.state = 43;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	            case 7:
	            case 8:
	            case 20:
	            case 21:
	            case 22:
	                this.state = 40;
	                localctx.right = this.prod();
	                break;
	            case 4:
	                this.state = 41;
	                this.match(MathParser.T__3);
	                this.state = 42;
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
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, MathParser.RULE_atom, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            localctx = new PassAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 48;
	            localctx.fchild = this.func();
	            break;
	        case 5:
	            localctx = new PassAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 49;
	            this.match(MathParser.T__4);
	            this.state = 50;
	            localctx.echild = this.expr(0);
	            this.state = 51;
	            this.match(MathParser.T__5);
	            break;
	        case 7:
	            localctx = new PassAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(MathParser.T__6);
	            this.state = 54;
	            localctx.echild = this.expr(0);
	            this.state = 55;
	            this.match(MathParser.T__2);
	            break;
	        case 20:
	        case 21:
	        case 22:
	            localctx = new ValAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 57;
	            localctx.val = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0))) {
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
	        this.state = 65;
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
	                this.state = 60;
	                if (!( this.precpred(this._ctx, 5))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                }
	                this.state = 61;
	                localctx.op = this.match(MathParser.OP_POW);
	                this.state = 62;
	                localctx.right = this.atom(6); 
	            }
	            this.state = 67;
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
	    this.enterRule(localctx, 10, MathParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(MathParser.T__7);
	        this.state = 69;
	        this.fn_name();
	        this.state = 70;
	        this.match(MathParser.T__4);
	        this.state = 71;
	        this.expr(0);
	        this.state = 72;
	        this.match(MathParser.T__5);
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
	    this.enterRule(localctx, 12, MathParser.RULE_fn_name);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            localctx.val = this.match(MathParser.FN_SIN);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            localctx.val = this.match(MathParser.FN_COS);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            localctx.val = this.match(MathParser.FN_TAN);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            localctx.val = this.match(MathParser.FN_ARCSIN);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 78;
	            localctx.val = this.match(MathParser.FN_ARCCOS);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 79;
	            localctx.val = this.match(MathParser.FN_ARCTAN);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 80;
	            localctx.val = this.match(MathParser.FN_EXP);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 81;
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
MathParser.OP_ADD = 9;
MathParser.OP_MIN = 10;
MathParser.OP_POW = 11;
MathParser.FN_SIN = 12;
MathParser.FN_COS = 13;
MathParser.FN_TAN = 14;
MathParser.FN_ARCSIN = 15;
MathParser.FN_ARCCOS = 16;
MathParser.FN_ARCTAN = 17;
MathParser.FN_EXP = 18;
MathParser.FN_LOG = 19;
MathParser.CONSTANT = 20;
MathParser.INPUT = 21;
MathParser.REAL = 22;
MathParser.WS = 23;

MathParser.RULE_prog = 0;
MathParser.RULE_expr = 1;
MathParser.RULE_frac = 2;
MathParser.RULE_prod = 3;
MathParser.RULE_atom = 4;
MathParser.RULE_func = 5;
MathParser.RULE_fn_name = 6;

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
        this.dchild = null;;
        this.pchild = null;;
        super.copyFrom(ctx);
    }

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

	INPUT() {
	    return this.getToken(MathParser.INPUT, 0);
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
MathParser.FracContext = FracContext; 
MathParser.ProdContext = ProdContext; 
MathParser.AtomContext = AtomContext; 
MathParser.FuncContext = FuncContext; 
MathParser.Fn_nameContext = Fn_nameContext; 
