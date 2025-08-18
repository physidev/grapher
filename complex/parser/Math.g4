grammar Math;

prog: expr EOF;
    
expr: schild=sum                                    # passExpr
    | dchild=frac                                   # passExpr
    | pchild=prod                                   # passExpr  
    | op=(OP_ADD|OP_MIN) expr                       # unaryExpr 
    | left=expr op=(OP_ADD|OP_MIN) right=expr       # sumDiffExpr
    ;

sum: '\\sum_{' index=VARIABLE '=' initial=REAL '}^{' final=REAL '}' summand=expr
    ;

frac: '\\frac{' left=expr '}{' right=expr '}'
    ;

prod: atom                                          # unaryProd
    | left=atom (right=prod | '\\cdot' right=prod)    # binProd
    ;
    
atom: left=atom op=OP_POW right=atom                # powAtom
    | fchild=func                                   # passAtom
    | '(' echild=expr ')'                           # passAtom  
    | '{' echild=expr '}'                           # passAtom  
    | val=(REAL | CONSTANT | VARIABLE)              # valAtom  
    ;
    
func: '\\' fn_name '(' expr ')';
fn_name
    : val=FN_SIN
    | val=FN_COS
    | val=FN_TAN
    | val=FN_ARCSIN
    | val=FN_ARCCOS
    | val=FN_ARCTAN
    | val=FN_EXP
    | val=FN_LOG
    ;

OP_ADD: '+';
OP_MIN: '-';
OP_POW: '^';

FN_SIN:     'sin';
FN_COS:     'cos';
FN_TAN:     'tan';
FN_ARCSIN:  'arcsin';
FN_ARCCOS:  'arccos';
FN_ARCTAN:  'arctan';
FN_EXP:     'exp';
FN_LOG:     'log';

CONSTANT: 'e' | 'i' | '\\pi';
VARIABLE: 'j' | 'k' | 'n' | 'm' | 'z' | 'x' | 'y';

REAL: ( '0' | [1-9] [0-9]* ) ('.' [0-9]+ )? ;
WS: ([\t\r\n] | ' ')+ -> skip;