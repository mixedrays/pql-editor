grammar PQL2;

/*============= Parser =============*/
query
    : (csvBoolean)? EOF
    ;

csvBoolean
	: infixBoolean (',' infixBoolean)*                                              #csvBooleanExpression
	;

infixBoolean
    : operator=NOT infixBoolean                                                     #unaryBooleanExpression
    | infixBoolean operator=AND infixBoolean                                        #infixBooleanExpression
    | infixBoolean operator=OR infixBoolean                                         #infixBooleanExpression
    | infixBoolean operator=NOT infixBoolean                                        #infixBooleanExpression
    | field=fieldRule '=' presense=(YES|NO|ALL)                                     #presenceExpression
    | infixProximity                                                                #infixProximityLink
    ;

infixProximity
    : infixProximity operator=OperatorInfixSlopWord infixProximity                       #infixProximityExpression
    | infixProximity operator=OperatorInfixSlopSentence infixProximity                   #infixOutlineProximityExpression
    | infixProximity operator=OperatorInfixNotSentence infixProximity                    #infixProximityExpression
    | infixProximity operator=OperatorInfixSlopParagraph infixProximity                  #infixOutlineProximityExpression
    | infixProximity operator=OperatorInfixNotParagraph infixProximity                   #infixProximityExpression
    | infixProximity operator=OperatorInfixField infixProximity                          #infixOutlineProximityExpression
    | infixProximity operator=OperatorInfixNotFieldORParagraph infixProximity            #infixProximityExpression
    | infixProximity operator=OperatorInfixNOV infixProximity                            #infixProximityExpression
    | implicitInfixProximity                                                             #implicitInfixProximityLink
    ;

implicitInfixProximity
    : synonymOr (synonymOr)*                                                              #implicitInfixOutlineProximityExpression
    ;

synonymOr
	 : prefixOrRelational (operator=OperatorSynonymOR prefixOrRelational)+           #synonymBooleanOrExpression
     | prefixOrRelational                                                            #prefixOrRelationalLink
     ;

prefixOrRelational
    : expressionFraming                                                             #framingExpression
    | expressionNoCapFraming                                                        #noCapFramingExpression
    | prefixOrRelational (selector)+                                                #selectorExpression
    | prefixOrRelational weight                                                     #weightExpression
    | field=fieldRule operator=('>' | '>='| '<' | '<='| '=') term                   #equalityExpression
    | prefixOrRelational operator=OperatorRelational term                           #relationalExpression
    | operator=OperatorNoCap expressionPar                                          #noCapExpression
    | expressionPar                                                                 #parenthesisExpression
    | term                                                                          #termExpression
    | selector                                                                      #likeSelectorExpression
    ;

expressionFraming: operator=OperatorFraming expressionList ')';

expressionNoCapFraming: operator=OperatorNoCapFraming expressionList ')' ;

expressionPar: '(' csvBoolean ')';

expressionList: infixBoolean (',' infixBoolean)+;

term
    : TermWithExclusion
    | FieldOrTerm
    ;

selector
    : Selector
    ;

weight
    : Weight
    ;

fieldRule
	: FieldOrTerm
	;

/*============= Lexer =============*/

OR:  O R;
AND: A N D;
NOT: N O T;

YES: Y E S;
NO: N O;
ALL: A L L;

OperatorSynonymOR: '|';

OperatorNoCapFraming
   : (OperatorNoCap WS*) OperatorFraming
   ;

OperatorFraming
    : ('-')* Slop? (ORDERED_GROUP|UNORDERED_GROUP) WS* '('
    ;

OperatorInfixSlopWord
    : ('!'|'-')* Slop? (WORD|DISTANCE)
    ;

OperatorInfixSlopSentence
    : Slop? (SENTENCE)
    ;

OperatorInfixNotSentence
    : ('!'|'-')* Slop? (SENTENCE)
    | NOT_IN_SENTENCE
    ;

OperatorInfixSlopParagraph
    : Slop? (PARAGRAPH|PARAGRAPH2)
    ;

OperatorInfixNotParagraph
    : ('!'|'-')+ Slop? (PARAGRAPH|PARAGRAPH2)
    | (NOT_IN_PARAGRAPH | NOT_IN_PARAGRAPH2)
    ;

OperatorInfixField
    : FIELD
    ;

OperatorInfixNotFieldORParagraph
    : '!' FIELD
    | NOT_IN_FIELD
    ;

OperatorInfixNOV
    : NO_OVERLAPPING
    ;

OperatorRelational: WS IN WS;

OperatorNoCap: '&';

Selector: ('/' | ':') FieldOrTerm;

Weight: '^' (Digit)+ ('.' Digit+)?;

FieldOrTerm
    : Term
    ;

TermWithExclusion
    : Term (WS* '!' WS*'(' WS* TermsList WS* ')')?
    ;

fragment
Term
    : (OperatorNoCap WS*)? TermBlockCompound+
    /*| ('~' | '$' | '*') Term*/
    | '~' Term
    ;

fragment
TermsList
    : Term (WS* ',' WS* Term)*
    ;

fragment
TermBlockCompound
    : TermBlock+
    | '[' WS* (TermWithExclusion)? (WS* ',' WS* (TermWithExclusion)?)* WS* ']'
    ;

fragment
TermBlock
    : LetterTerm
    | DateTerm
    | NumericTerm
    | QuotedTerm
    | IntervalLetterTerm
    | IntervalDigitTerm
    | RangeNaturalNumberTerm
    | RangeNumberTerm
    | WildcardTerm
    ;

fragment
LetterTerm: Letter+;

fragment
NumericTerm: RealNumber;

fragment
DateTerm: Year ('-' Month ('-' Day)?)?;

fragment
Year
  : '1' ('8'..'9') Digit Digit
  | '2' Digit Digit Digit
  ;

fragment
Month
  : '0' ('1'..'9')
  | '1' ('1'..'2')
  ;

fragment
Day
  : '0' ('1'..'9')
  | '1'..'2' ('0'..'9')
  | '3' ('0'..'1')
  ;

fragment
QuotedTerm: '"'  ~('"')* '"';

fragment
IntervalLetterTerm: Letter '-' Letter;

fragment
IntervalDigitTerm: Digit '-' Digit;

fragment
RangeNumberTerm: RealNumber WS* ':' WS* RealNumber;

fragment
RangeNaturalNumberTerm: NaturalNumber WS* '-' WS* NaturalNumber;

fragment
WildcardTerm: '?' | '+' | '#';

fragment
NaturalNumber: Digit+;

fragment
RealNumber: ('-')? (Digit)+ ('.' Digit+)?;

fragment
Digit: '0'..'9';

fragment
Slop
    : '0'
    | ('1'..'9') Digit*
    ;

fragment
Letter: ~[,!()[\]{}"| \t\r\n=<>?+#0123456789^];

fragment A:('a'|'A');
fragment B:('b'|'B');
fragment C:('c'|'C');
fragment D:('d'|'D');
fragment E:('e'|'E');
fragment F:('f'|'F');
fragment G:('g'|'G');
fragment H:('h'|'H');
fragment I:('i'|'I');
fragment J:('j'|'J');
fragment K:('k'|'K');
fragment L:('l'|'L');
fragment M:('m'|'M');
fragment N:('n'|'N');
fragment O:('o'|'O');
fragment P:('p'|'P');
fragment Q:('q'|'Q');
fragment R:('r'|'R');
fragment S:('s'|'S');
fragment T:('t'|'T');
fragment U:('u'|'U');
fragment V:('v'|'V');
fragment W:('w'|'W');
fragment X:('x'|'X');
fragment Y:('y'|'Y');
fragment Z:('z'|'Z');

ORDERED_GROUP: O G;
UNORDERED_GROUP: U G;
WORD: W;
DISTANCE: D;
SENTENCE: S;
PARAGRAPH: P;
PARAGRAPH2: L;
FIELD: F;
NOT_IN_SENTENCE: N O T S;
NOT_IN_PARAGRAPH: N O T P;
NOT_IN_PARAGRAPH2: N O T L;
NOT_IN_FIELD: N O T F;
NO_OVERLAPPING: N O V;

IN: I N;

WS: [ \t\r\n] -> skip;
COMMENT :  '{' (COMMENT | ~[{}])* '}' -> skip;
