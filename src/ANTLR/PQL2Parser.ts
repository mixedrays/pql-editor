// Generated from ./PQL2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PQL2Listener } from "./PQL2Listener";

export class PQL2Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly OR = 9;
	public static readonly AND = 10;
	public static readonly NOT = 11;
	public static readonly YES = 12;
	public static readonly NO = 13;
	public static readonly ALL = 14;
	public static readonly OperatorSynonymOR = 15;
	public static readonly OperatorNoCapFraming = 16;
	public static readonly OperatorFraming = 17;
	public static readonly OperatorInfixSlopWord = 18;
	public static readonly OperatorInfixSlopSentence = 19;
	public static readonly OperatorInfixNotSentence = 20;
	public static readonly OperatorInfixSlopParagraph = 21;
	public static readonly OperatorInfixNotParagraph = 22;
	public static readonly OperatorInfixField = 23;
	public static readonly OperatorInfixNotFieldORParagraph = 24;
	public static readonly OperatorInfixNOV = 25;
	public static readonly OperatorRelational = 26;
	public static readonly OperatorNoCap = 27;
	public static readonly Selector = 28;
	public static readonly Weight = 29;
	public static readonly FieldOrTerm = 30;
	public static readonly TermWithExclusion = 31;
	public static readonly ORDERED_GROUP = 32;
	public static readonly UNORDERED_GROUP = 33;
	public static readonly WORD = 34;
	public static readonly DISTANCE = 35;
	public static readonly SENTENCE = 36;
	public static readonly PARAGRAPH = 37;
	public static readonly PARAGRAPH2 = 38;
	public static readonly FIELD = 39;
	public static readonly NOT_IN_SENTENCE = 40;
	public static readonly NOT_IN_PARAGRAPH = 41;
	public static readonly NOT_IN_PARAGRAPH2 = 42;
	public static readonly NOT_IN_FIELD = 43;
	public static readonly NO_OVERLAPPING = 44;
	public static readonly IN = 45;
	public static readonly WS = 46;
	public static readonly COMMENT = 47;
	public static readonly RULE_query = 0;
	public static readonly RULE_csvBoolean = 1;
	public static readonly RULE_infixBoolean = 2;
	public static readonly RULE_infixProximity = 3;
	public static readonly RULE_implicitInfixProximity = 4;
	public static readonly RULE_synonymOr = 5;
	public static readonly RULE_prefixOrRelational = 6;
	public static readonly RULE_expressionFraming = 7;
	public static readonly RULE_expressionNoCapFraming = 8;
	public static readonly RULE_expressionPar = 9;
	public static readonly RULE_expressionList = 10;
	public static readonly RULE_term = 11;
	public static readonly RULE_selector = 12;
	public static readonly RULE_weight = 13;
	public static readonly RULE_fieldRule = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "csvBoolean", "infixBoolean", "infixProximity", "implicitInfixProximity", 
		"synonymOr", "prefixOrRelational", "expressionFraming", "expressionNoCapFraming", 
		"expressionPar", "expressionList", "term", "selector", "weight", "fieldRule",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'='", "'>'", "'>='", "'<'", "'<='", "')'", "'('", undefined, 
		undefined, undefined, undefined, undefined, undefined, "'|'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'&'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "OR", "AND", "NOT", "YES", "NO", "ALL", "OperatorSynonymOR", 
		"OperatorNoCapFraming", "OperatorFraming", "OperatorInfixSlopWord", "OperatorInfixSlopSentence", 
		"OperatorInfixNotSentence", "OperatorInfixSlopParagraph", "OperatorInfixNotParagraph", 
		"OperatorInfixField", "OperatorInfixNotFieldORParagraph", "OperatorInfixNOV", 
		"OperatorRelational", "OperatorNoCap", "Selector", "Weight", "FieldOrTerm", 
		"TermWithExclusion", "ORDERED_GROUP", "UNORDERED_GROUP", "WORD", "DISTANCE", 
		"SENTENCE", "PARAGRAPH", "PARAGRAPH2", "FIELD", "NOT_IN_SENTENCE", "NOT_IN_PARAGRAPH", 
		"NOT_IN_PARAGRAPH2", "NOT_IN_FIELD", "NO_OVERLAPPING", "IN", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PQL2Parser._LITERAL_NAMES, PQL2Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PQL2Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PQL2.g4"; }

	// @Override
	public get ruleNames(): string[] { return PQL2Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PQL2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PQL2Parser._ATN, this);
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PQL2Parser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PQL2Parser.T__7) | (1 << PQL2Parser.NOT) | (1 << PQL2Parser.OperatorNoCapFraming) | (1 << PQL2Parser.OperatorFraming) | (1 << PQL2Parser.OperatorNoCap) | (1 << PQL2Parser.Selector) | (1 << PQL2Parser.FieldOrTerm) | (1 << PQL2Parser.TermWithExclusion))) !== 0)) {
				{
				this.state = 30;
				this.csvBoolean();
				}
			}

			this.state = 33;
			this.match(PQL2Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public csvBoolean(): CsvBooleanContext {
		let _localctx: CsvBooleanContext = new CsvBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PQL2Parser.RULE_csvBoolean);
		let _la: number;
		try {
			_localctx = new CsvBooleanExpressionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.infixBoolean(0);
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PQL2Parser.T__0) {
				{
				{
				this.state = 36;
				this.match(PQL2Parser.T__0);
				this.state = 37;
				this.infixBoolean(0);
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public infixBoolean(): InfixBooleanContext;
	public infixBoolean(_p: number): InfixBooleanContext;
	// @RuleVersion(0)
	public infixBoolean(_p?: number): InfixBooleanContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InfixBooleanContext = new InfixBooleanContext(this._ctx, _parentState);
		let _prevctx: InfixBooleanContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, PQL2Parser.RULE_infixBoolean, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryBooleanExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 44;
				(_localctx as UnaryBooleanExpressionContext)._operator = this.match(PQL2Parser.NOT);
				this.state = 45;
				this.infixBoolean(6);
				}
				break;

			case 2:
				{
				_localctx = new PresenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 46;
				(_localctx as PresenceExpressionContext)._field = this.fieldRule();
				this.state = 47;
				this.match(PQL2Parser.T__1);
				this.state = 48;
				(_localctx as PresenceExpressionContext)._presense = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PQL2Parser.YES) | (1 << PQL2Parser.NO) | (1 << PQL2Parser.ALL))) !== 0))) {
					(_localctx as PresenceExpressionContext)._presense = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				{
				_localctx = new InfixProximityLinkContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 50;
				this.infixProximity(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 64;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 62;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixBooleanExpressionContext(new InfixBooleanContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixBoolean);
						this.state = 53;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 54;
						(_localctx as InfixBooleanExpressionContext)._operator = this.match(PQL2Parser.AND);
						this.state = 55;
						this.infixBoolean(6);
						}
						break;

					case 2:
						{
						_localctx = new InfixBooleanExpressionContext(new InfixBooleanContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixBoolean);
						this.state = 56;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 57;
						(_localctx as InfixBooleanExpressionContext)._operator = this.match(PQL2Parser.OR);
						this.state = 58;
						this.infixBoolean(5);
						}
						break;

					case 3:
						{
						_localctx = new InfixBooleanExpressionContext(new InfixBooleanContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixBoolean);
						this.state = 59;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 60;
						(_localctx as InfixBooleanExpressionContext)._operator = this.match(PQL2Parser.NOT);
						this.state = 61;
						this.infixBoolean(4);
						}
						break;
					}
					}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public infixProximity(): InfixProximityContext;
	public infixProximity(_p: number): InfixProximityContext;
	// @RuleVersion(0)
	public infixProximity(_p?: number): InfixProximityContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InfixProximityContext = new InfixProximityContext(this._ctx, _parentState);
		let _prevctx: InfixProximityContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, PQL2Parser.RULE_infixProximity, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new ImplicitInfixProximityLinkContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 68;
			this.implicitInfixProximity();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 96;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 94;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 70;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 71;
						(_localctx as InfixProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixSlopWord);
						this.state = 72;
						this.infixProximity(10);
						}
						break;

					case 2:
						{
						_localctx = new InfixOutlineProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 73;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 74;
						(_localctx as InfixOutlineProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixSlopSentence);
						this.state = 75;
						this.infixProximity(9);
						}
						break;

					case 3:
						{
						_localctx = new InfixProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 76;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 77;
						(_localctx as InfixProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixNotSentence);
						this.state = 78;
						this.infixProximity(8);
						}
						break;

					case 4:
						{
						_localctx = new InfixOutlineProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 79;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 80;
						(_localctx as InfixOutlineProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixSlopParagraph);
						this.state = 81;
						this.infixProximity(7);
						}
						break;

					case 5:
						{
						_localctx = new InfixProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 82;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 83;
						(_localctx as InfixProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixNotParagraph);
						this.state = 84;
						this.infixProximity(6);
						}
						break;

					case 6:
						{
						_localctx = new InfixOutlineProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 85;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 86;
						(_localctx as InfixOutlineProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixField);
						this.state = 87;
						this.infixProximity(5);
						}
						break;

					case 7:
						{
						_localctx = new InfixProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 88;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 89;
						(_localctx as InfixProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixNotFieldORParagraph);
						this.state = 90;
						this.infixProximity(4);
						}
						break;

					case 8:
						{
						_localctx = new InfixProximityExpressionContext(new InfixProximityContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_infixProximity);
						this.state = 91;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 92;
						(_localctx as InfixProximityExpressionContext)._operator = this.match(PQL2Parser.OperatorInfixNOV);
						this.state = 93;
						this.infixProximity(3);
						}
						break;
					}
					}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implicitInfixProximity(): ImplicitInfixProximityContext {
		let _localctx: ImplicitInfixProximityContext = new ImplicitInfixProximityContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PQL2Parser.RULE_implicitInfixProximity);
		try {
			let _alt: number;
			_localctx = new ImplicitInfixOutlineProximityExpressionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.synonymOr();
			this.state = 103;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 100;
					this.synonymOr();
					}
					}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public synonymOr(): SynonymOrContext {
		let _localctx: SynonymOrContext = new SynonymOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PQL2Parser.RULE_synonymOr);
		try {
			let _alt: number;
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new SynonymBooleanOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.prefixOrRelational(0);
				this.state = 109;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 107;
						(_localctx as SynonymBooleanOrExpressionContext)._operator = this.match(PQL2Parser.OperatorSynonymOR);
						this.state = 108;
						this.prefixOrRelational(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 111;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				_localctx = new PrefixOrRelationalLinkContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.prefixOrRelational(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public prefixOrRelational(): PrefixOrRelationalContext;
	public prefixOrRelational(_p: number): PrefixOrRelationalContext;
	// @RuleVersion(0)
	public prefixOrRelational(_p?: number): PrefixOrRelationalContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrefixOrRelationalContext = new PrefixOrRelationalContext(this._ctx, _parentState);
		let _prevctx: PrefixOrRelationalContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, PQL2Parser.RULE_prefixOrRelational, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				_localctx = new FramingExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 117;
				this.expressionFraming();
				}
				break;

			case 2:
				{
				_localctx = new NoCapFramingExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.expressionNoCapFraming();
				}
				break;

			case 3:
				{
				_localctx = new EqualityExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				(_localctx as EqualityExpressionContext)._field = this.fieldRule();
				this.state = 120;
				(_localctx as EqualityExpressionContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PQL2Parser.T__1) | (1 << PQL2Parser.T__2) | (1 << PQL2Parser.T__3) | (1 << PQL2Parser.T__4) | (1 << PQL2Parser.T__5))) !== 0))) {
					(_localctx as EqualityExpressionContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 121;
				this.term();
				}
				break;

			case 4:
				{
				_localctx = new NoCapExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				(_localctx as NoCapExpressionContext)._operator = this.match(PQL2Parser.OperatorNoCap);
				this.state = 124;
				this.expressionPar();
				}
				break;

			case 5:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 125;
				this.expressionPar();
				}
				break;

			case 6:
				{
				_localctx = new TermExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.term();
				}
				break;

			case 7:
				{
				_localctx = new LikeSelectorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.selector();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 143;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 141;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new SelectorExpressionContext(new PrefixOrRelationalContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_prefixOrRelational);
						this.state = 130;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 132;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 131;
								this.selector();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 134;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;

					case 2:
						{
						_localctx = new WeightExpressionContext(new PrefixOrRelationalContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_prefixOrRelational);
						this.state = 136;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 137;
						this.weight();
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(new PrefixOrRelationalContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PQL2Parser.RULE_prefixOrRelational);
						this.state = 138;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 139;
						(_localctx as RelationalExpressionContext)._operator = this.match(PQL2Parser.OperatorRelational);
						this.state = 140;
						this.term();
						}
						break;
					}
					}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionFraming(): ExpressionFramingContext {
		let _localctx: ExpressionFramingContext = new ExpressionFramingContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PQL2Parser.RULE_expressionFraming);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			_localctx._operator = this.match(PQL2Parser.OperatorFraming);
			this.state = 147;
			this.expressionList();
			this.state = 148;
			this.match(PQL2Parser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionNoCapFraming(): ExpressionNoCapFramingContext {
		let _localctx: ExpressionNoCapFramingContext = new ExpressionNoCapFramingContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PQL2Parser.RULE_expressionNoCapFraming);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			_localctx._operator = this.match(PQL2Parser.OperatorNoCapFraming);
			this.state = 151;
			this.expressionList();
			this.state = 152;
			this.match(PQL2Parser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionPar(): ExpressionParContext {
		let _localctx: ExpressionParContext = new ExpressionParContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PQL2Parser.RULE_expressionPar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(PQL2Parser.T__7);
			this.state = 155;
			this.csvBoolean();
			this.state = 156;
			this.match(PQL2Parser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PQL2Parser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.infixBoolean(0);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 159;
				this.match(PQL2Parser.T__0);
				this.state = 160;
				this.infixBoolean(0);
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PQL2Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PQL2Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			_la = this._input.LA(1);
			if (!(_la === PQL2Parser.FieldOrTerm || _la === PQL2Parser.TermWithExclusion)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PQL2Parser.RULE_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(PQL2Parser.Selector);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weight(): WeightContext {
		let _localctx: WeightContext = new WeightContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PQL2Parser.RULE_weight);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(PQL2Parser.Weight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldRule(): FieldRuleContext {
		let _localctx: FieldRuleContext = new FieldRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PQL2Parser.RULE_fieldRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(PQL2Parser.FieldOrTerm);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.infixBoolean_sempred(_localctx as InfixBooleanContext, predIndex);

		case 3:
			return this.infixProximity_sempred(_localctx as InfixProximityContext, predIndex);

		case 6:
			return this.prefixOrRelational_sempred(_localctx as PrefixOrRelationalContext, predIndex);
		}
		return true;
	}
	private infixBoolean_sempred(_localctx: InfixBooleanContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private infixProximity_sempred(_localctx: InfixProximityContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private prefixOrRelational_sempred(_localctx: PrefixOrRelationalContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);

		case 13:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\xB0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x05\x02\"\n\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03)\n\x03\f\x03\x0E\x03,\v\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x046" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04A\n\x04\f\x04\x0E\x04D\v\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05a\n\x05\f\x05\x0E" +
		"\x05d\v\x05\x03\x06\x03\x06\x07\x06h\n\x06\f\x06\x0E\x06k\v\x06\x03\x07" +
		"\x03\x07\x03\x07\x06\x07p\n\x07\r\x07\x0E\x07q\x03\x07\x05\x07u\n\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\x83\n\b\x03\b\x03\b\x06\b\x87\n\b\r\b\x0E\b\x88\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\x90\n\b\f\b\x0E\b\x93\v\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x06" +
		"\f\xA4\n\f\r\f\x0E\f\xA5\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x02\x02\x05\x06\b\x0E\x11\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02\x02\x05\x03\x02\x0E\x10\x03\x02\x04\b\x03\x02 !\x02" +
		"\xBD\x02!\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x065\x03\x02\x02\x02\b" +
		"E\x03\x02\x02\x02\ne\x03\x02\x02\x02\ft\x03\x02\x02\x02\x0E\x82\x03\x02" +
		"\x02\x02\x10\x94\x03\x02\x02\x02\x12\x98\x03\x02\x02\x02\x14\x9C\x03\x02" +
		"\x02\x02\x16\xA0\x03\x02\x02\x02\x18\xA7\x03\x02\x02\x02\x1A\xA9\x03\x02" +
		"\x02\x02\x1C\xAB\x03\x02\x02\x02\x1E\xAD\x03\x02\x02\x02 \"\x05\x04\x03" +
		"\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x07\x02" +
		"\x02\x03$\x03\x03\x02\x02\x02%*\x05\x06\x04\x02&\'\x07\x03\x02\x02\')" +
		"\x05\x06\x04\x02(&\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+\x05\x03\x02\x02\x02,*\x03\x02\x02\x02-.\b\x04\x01" +
		"\x02./\x07\r\x02\x02/6\x05\x06\x04\b01\x05\x1E\x10\x0212\x07\x04\x02\x02" +
		"23\t\x02\x02\x0236\x03\x02\x02\x0246\x05\b\x05\x025-\x03\x02\x02\x025" +
		"0\x03\x02\x02\x0254\x03\x02\x02\x026B\x03\x02\x02\x0278\f\x07\x02\x02" +
		"89\x07\f\x02\x029A\x05\x06\x04\b:;\f\x06\x02\x02;<\x07\v\x02\x02<A\x05" +
		"\x06\x04\x07=>\f\x05\x02\x02>?\x07\r\x02\x02?A\x05\x06\x04\x06@7\x03\x02" +
		"\x02\x02@:\x03\x02\x02\x02@=\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02" +
		"\x02\x02BC\x03\x02\x02\x02C\x07\x03\x02\x02\x02DB\x03\x02\x02\x02EF\b" +
		"\x05\x01\x02FG\x05\n\x06\x02Gb\x03\x02\x02\x02HI\f\v\x02\x02IJ\x07\x14" +
		"\x02\x02Ja\x05\b\x05\fKL\f\n\x02\x02LM\x07\x15\x02\x02Ma\x05\b\x05\vN" +
		"O\f\t\x02\x02OP\x07\x16\x02\x02Pa\x05\b\x05\nQR\f\b\x02\x02RS\x07\x17" +
		"\x02\x02Sa\x05\b\x05\tTU\f\x07\x02\x02UV\x07\x18\x02\x02Va\x05\b\x05\b" +
		"WX\f\x06\x02\x02XY\x07\x19\x02\x02Ya\x05\b\x05\x07Z[\f\x05\x02\x02[\\" +
		"\x07\x1A\x02\x02\\a\x05\b\x05\x06]^\f\x04\x02\x02^_\x07\x1B\x02\x02_a" +
		"\x05\b\x05\x05`H\x03\x02\x02\x02`K\x03\x02\x02\x02`N\x03\x02\x02\x02`" +
		"Q\x03\x02\x02\x02`T\x03\x02\x02\x02`W\x03\x02\x02\x02`Z\x03\x02\x02\x02" +
		"`]\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"c\t\x03\x02\x02\x02db\x03\x02\x02\x02ei\x05\f\x07\x02fh\x05\f\x07\x02" +
		"gf\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02" +
		"j\v\x03\x02\x02\x02ki\x03\x02\x02\x02lo\x05\x0E\b\x02mn\x07\x11\x02\x02" +
		"np\x05\x0E\b\x02om\x03\x02\x02\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02" +
		"qr\x03\x02\x02\x02ru\x03\x02\x02\x02su\x05\x0E\b\x02tl\x03\x02\x02\x02" +
		"ts\x03\x02\x02\x02u\r\x03\x02\x02\x02vw\b\b\x01\x02w\x83\x05\x10\t\x02" +
		"x\x83\x05\x12\n\x02yz\x05\x1E\x10\x02z{\t\x03\x02\x02{|\x05\x18\r\x02" +
		"|\x83\x03\x02\x02\x02}~\x07\x1D\x02\x02~\x83\x05\x14\v\x02\x7F\x83\x05" +
		"\x14\v\x02\x80\x83\x05\x18\r\x02\x81\x83\x05\x1A\x0E\x02\x82v\x03\x02" +
		"\x02\x02\x82x\x03\x02\x02\x02\x82y\x03\x02\x02\x02\x82}\x03\x02\x02\x02" +
		"\x82\x7F\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02" +
		"\x83\x91\x03\x02\x02\x02\x84\x86\f\n\x02\x02\x85\x87\x05\x1A\x0E\x02\x86" +
		"\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89\x90\x03\x02\x02\x02\x8A\x8B\f\t\x02\x02\x8B\x90" +
		"\x05\x1C\x0F\x02\x8C\x8D\f\x07\x02\x02\x8D\x8E\x07\x1C\x02\x02\x8E\x90" +
		"\x05\x18\r\x02\x8F\x84\x03\x02\x02\x02\x8F\x8A\x03\x02\x02\x02\x8F\x8C" +
		"\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92" +
		"\x03\x02\x02\x02\x92\x0F\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95" +
		"\x07\x13\x02\x02\x95\x96\x05\x16\f\x02\x96\x97\x07\t\x02\x02\x97\x11\x03" +
		"\x02\x02\x02\x98\x99\x07\x12\x02\x02\x99\x9A\x05\x16\f\x02\x9A\x9B\x07" +
		"\t\x02\x02\x9B\x13\x03\x02\x02\x02\x9C\x9D\x07\n\x02\x02\x9D\x9E\x05\x04" +
		"\x03\x02\x9E\x9F\x07\t\x02\x02\x9F\x15\x03\x02\x02\x02\xA0\xA3\x05\x06" +
		"\x04\x02\xA1\xA2\x07\x03\x02\x02\xA2\xA4\x05\x06\x04\x02\xA3\xA1\x03\x02" +
		"\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02" +
		"\x02\x02\xA6\x17\x03\x02\x02\x02\xA7\xA8\t\x04\x02\x02\xA8\x19\x03\x02" +
		"\x02\x02\xA9\xAA\x07\x1E\x02\x02\xAA\x1B\x03\x02\x02\x02\xAB\xAC\x07\x1F" +
		"\x02\x02\xAC\x1D\x03\x02\x02\x02\xAD\xAE\x07 \x02\x02\xAE\x1F\x03\x02" +
		"\x02\x02\x11!*5@B`biqt\x82\x88\x8F\x91\xA5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PQL2Parser.__ATN) {
			PQL2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PQL2Parser._serializedATN));
		}

		return PQL2Parser.__ATN;
	}

}

export class QueryContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(PQL2Parser.EOF, 0); }
	public csvBoolean(): CsvBooleanContext | undefined {
		return this.tryGetRuleContext(0, CsvBooleanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_query; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
}


export class CsvBooleanContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_csvBoolean; }
	public copyFrom(ctx: CsvBooleanContext): void {
		super.copyFrom(ctx);
	}
}
export class CsvBooleanExpressionContext extends CsvBooleanContext {
	public infixBoolean(): InfixBooleanContext[];
	public infixBoolean(i: number): InfixBooleanContext;
	public infixBoolean(i?: number): InfixBooleanContext | InfixBooleanContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfixBooleanContext);
		} else {
			return this.getRuleContext(i, InfixBooleanContext);
		}
	}
	constructor(ctx: CsvBooleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterCsvBooleanExpression) {
			listener.enterCsvBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitCsvBooleanExpression) {
			listener.exitCsvBooleanExpression(this);
		}
	}
}


export class InfixBooleanContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_infixBoolean; }
	public copyFrom(ctx: InfixBooleanContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryBooleanExpressionContext extends InfixBooleanContext {
	public _operator!: Token;
	public infixBoolean(): InfixBooleanContext {
		return this.getRuleContext(0, InfixBooleanContext);
	}
	public NOT(): TerminalNode { return this.getToken(PQL2Parser.NOT, 0); }
	constructor(ctx: InfixBooleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterUnaryBooleanExpression) {
			listener.enterUnaryBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitUnaryBooleanExpression) {
			listener.exitUnaryBooleanExpression(this);
		}
	}
}
export class InfixBooleanExpressionContext extends InfixBooleanContext {
	public _operator!: Token;
	public infixBoolean(): InfixBooleanContext[];
	public infixBoolean(i: number): InfixBooleanContext;
	public infixBoolean(i?: number): InfixBooleanContext | InfixBooleanContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfixBooleanContext);
		} else {
			return this.getRuleContext(i, InfixBooleanContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.NOT, 0); }
	constructor(ctx: InfixBooleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterInfixBooleanExpression) {
			listener.enterInfixBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitInfixBooleanExpression) {
			listener.exitInfixBooleanExpression(this);
		}
	}
}
export class PresenceExpressionContext extends InfixBooleanContext {
	public _field!: FieldRuleContext;
	public _presense!: Token;
	public fieldRule(): FieldRuleContext {
		return this.getRuleContext(0, FieldRuleContext);
	}
	public YES(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.YES, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.NO, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.ALL, 0); }
	constructor(ctx: InfixBooleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterPresenceExpression) {
			listener.enterPresenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitPresenceExpression) {
			listener.exitPresenceExpression(this);
		}
	}
}
export class InfixProximityLinkContext extends InfixBooleanContext {
	public infixProximity(): InfixProximityContext {
		return this.getRuleContext(0, InfixProximityContext);
	}
	constructor(ctx: InfixBooleanContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterInfixProximityLink) {
			listener.enterInfixProximityLink(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitInfixProximityLink) {
			listener.exitInfixProximityLink(this);
		}
	}
}


export class InfixProximityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_infixProximity; }
	public copyFrom(ctx: InfixProximityContext): void {
		super.copyFrom(ctx);
	}
}
export class InfixProximityExpressionContext extends InfixProximityContext {
	public _operator!: Token;
	public infixProximity(): InfixProximityContext[];
	public infixProximity(i: number): InfixProximityContext;
	public infixProximity(i?: number): InfixProximityContext | InfixProximityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfixProximityContext);
		} else {
			return this.getRuleContext(i, InfixProximityContext);
		}
	}
	public OperatorInfixSlopWord(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixSlopWord, 0); }
	public OperatorInfixNotSentence(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixNotSentence, 0); }
	public OperatorInfixNotParagraph(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixNotParagraph, 0); }
	public OperatorInfixNotFieldORParagraph(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixNotFieldORParagraph, 0); }
	public OperatorInfixNOV(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixNOV, 0); }
	constructor(ctx: InfixProximityContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterInfixProximityExpression) {
			listener.enterInfixProximityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitInfixProximityExpression) {
			listener.exitInfixProximityExpression(this);
		}
	}
}
export class InfixOutlineProximityExpressionContext extends InfixProximityContext {
	public _operator!: Token;
	public infixProximity(): InfixProximityContext[];
	public infixProximity(i: number): InfixProximityContext;
	public infixProximity(i?: number): InfixProximityContext | InfixProximityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfixProximityContext);
		} else {
			return this.getRuleContext(i, InfixProximityContext);
		}
	}
	public OperatorInfixSlopSentence(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixSlopSentence, 0); }
	public OperatorInfixSlopParagraph(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixSlopParagraph, 0); }
	public OperatorInfixField(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.OperatorInfixField, 0); }
	constructor(ctx: InfixProximityContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterInfixOutlineProximityExpression) {
			listener.enterInfixOutlineProximityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitInfixOutlineProximityExpression) {
			listener.exitInfixOutlineProximityExpression(this);
		}
	}
}
export class ImplicitInfixProximityLinkContext extends InfixProximityContext {
	public implicitInfixProximity(): ImplicitInfixProximityContext {
		return this.getRuleContext(0, ImplicitInfixProximityContext);
	}
	constructor(ctx: InfixProximityContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterImplicitInfixProximityLink) {
			listener.enterImplicitInfixProximityLink(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitImplicitInfixProximityLink) {
			listener.exitImplicitInfixProximityLink(this);
		}
	}
}


export class ImplicitInfixProximityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_implicitInfixProximity; }
	public copyFrom(ctx: ImplicitInfixProximityContext): void {
		super.copyFrom(ctx);
	}
}
export class ImplicitInfixOutlineProximityExpressionContext extends ImplicitInfixProximityContext {
	public synonymOr(): SynonymOrContext[];
	public synonymOr(i: number): SynonymOrContext;
	public synonymOr(i?: number): SynonymOrContext | SynonymOrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SynonymOrContext);
		} else {
			return this.getRuleContext(i, SynonymOrContext);
		}
	}
	constructor(ctx: ImplicitInfixProximityContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterImplicitInfixOutlineProximityExpression) {
			listener.enterImplicitInfixOutlineProximityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitImplicitInfixOutlineProximityExpression) {
			listener.exitImplicitInfixOutlineProximityExpression(this);
		}
	}
}


export class SynonymOrContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_synonymOr; }
	public copyFrom(ctx: SynonymOrContext): void {
		super.copyFrom(ctx);
	}
}
export class SynonymBooleanOrExpressionContext extends SynonymOrContext {
	public _operator!: Token;
	public prefixOrRelational(): PrefixOrRelationalContext[];
	public prefixOrRelational(i: number): PrefixOrRelationalContext;
	public prefixOrRelational(i?: number): PrefixOrRelationalContext | PrefixOrRelationalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrefixOrRelationalContext);
		} else {
			return this.getRuleContext(i, PrefixOrRelationalContext);
		}
	}
	public OperatorSynonymOR(): TerminalNode[];
	public OperatorSynonymOR(i: number): TerminalNode;
	public OperatorSynonymOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PQL2Parser.OperatorSynonymOR);
		} else {
			return this.getToken(PQL2Parser.OperatorSynonymOR, i);
		}
	}
	constructor(ctx: SynonymOrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterSynonymBooleanOrExpression) {
			listener.enterSynonymBooleanOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitSynonymBooleanOrExpression) {
			listener.exitSynonymBooleanOrExpression(this);
		}
	}
}
export class PrefixOrRelationalLinkContext extends SynonymOrContext {
	public prefixOrRelational(): PrefixOrRelationalContext {
		return this.getRuleContext(0, PrefixOrRelationalContext);
	}
	constructor(ctx: SynonymOrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterPrefixOrRelationalLink) {
			listener.enterPrefixOrRelationalLink(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitPrefixOrRelationalLink) {
			listener.exitPrefixOrRelationalLink(this);
		}
	}
}


export class PrefixOrRelationalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_prefixOrRelational; }
	public copyFrom(ctx: PrefixOrRelationalContext): void {
		super.copyFrom(ctx);
	}
}
export class FramingExpressionContext extends PrefixOrRelationalContext {
	public expressionFraming(): ExpressionFramingContext {
		return this.getRuleContext(0, ExpressionFramingContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterFramingExpression) {
			listener.enterFramingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitFramingExpression) {
			listener.exitFramingExpression(this);
		}
	}
}
export class NoCapFramingExpressionContext extends PrefixOrRelationalContext {
	public expressionNoCapFraming(): ExpressionNoCapFramingContext {
		return this.getRuleContext(0, ExpressionNoCapFramingContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterNoCapFramingExpression) {
			listener.enterNoCapFramingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitNoCapFramingExpression) {
			listener.exitNoCapFramingExpression(this);
		}
	}
}
export class SelectorExpressionContext extends PrefixOrRelationalContext {
	public prefixOrRelational(): PrefixOrRelationalContext {
		return this.getRuleContext(0, PrefixOrRelationalContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterSelectorExpression) {
			listener.enterSelectorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitSelectorExpression) {
			listener.exitSelectorExpression(this);
		}
	}
}
export class WeightExpressionContext extends PrefixOrRelationalContext {
	public prefixOrRelational(): PrefixOrRelationalContext {
		return this.getRuleContext(0, PrefixOrRelationalContext);
	}
	public weight(): WeightContext {
		return this.getRuleContext(0, WeightContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterWeightExpression) {
			listener.enterWeightExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitWeightExpression) {
			listener.exitWeightExpression(this);
		}
	}
}
export class EqualityExpressionContext extends PrefixOrRelationalContext {
	public _field!: FieldRuleContext;
	public _operator!: Token;
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public fieldRule(): FieldRuleContext {
		return this.getRuleContext(0, FieldRuleContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
}
export class RelationalExpressionContext extends PrefixOrRelationalContext {
	public _operator!: Token;
	public prefixOrRelational(): PrefixOrRelationalContext {
		return this.getRuleContext(0, PrefixOrRelationalContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public OperatorRelational(): TerminalNode { return this.getToken(PQL2Parser.OperatorRelational, 0); }
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}
export class NoCapExpressionContext extends PrefixOrRelationalContext {
	public _operator!: Token;
	public expressionPar(): ExpressionParContext {
		return this.getRuleContext(0, ExpressionParContext);
	}
	public OperatorNoCap(): TerminalNode { return this.getToken(PQL2Parser.OperatorNoCap, 0); }
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterNoCapExpression) {
			listener.enterNoCapExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitNoCapExpression) {
			listener.exitNoCapExpression(this);
		}
	}
}
export class ParenthesisExpressionContext extends PrefixOrRelationalContext {
	public expressionPar(): ExpressionParContext {
		return this.getRuleContext(0, ExpressionParContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterParenthesisExpression) {
			listener.enterParenthesisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitParenthesisExpression) {
			listener.exitParenthesisExpression(this);
		}
	}
}
export class TermExpressionContext extends PrefixOrRelationalContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterTermExpression) {
			listener.enterTermExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitTermExpression) {
			listener.exitTermExpression(this);
		}
	}
}
export class LikeSelectorExpressionContext extends PrefixOrRelationalContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	constructor(ctx: PrefixOrRelationalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterLikeSelectorExpression) {
			listener.enterLikeSelectorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitLikeSelectorExpression) {
			listener.exitLikeSelectorExpression(this);
		}
	}
}


export class ExpressionFramingContext extends ParserRuleContext {
	public _operator!: Token;
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public OperatorFraming(): TerminalNode { return this.getToken(PQL2Parser.OperatorFraming, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_expressionFraming; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterExpressionFraming) {
			listener.enterExpressionFraming(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitExpressionFraming) {
			listener.exitExpressionFraming(this);
		}
	}
}


export class ExpressionNoCapFramingContext extends ParserRuleContext {
	public _operator!: Token;
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public OperatorNoCapFraming(): TerminalNode { return this.getToken(PQL2Parser.OperatorNoCapFraming, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_expressionNoCapFraming; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterExpressionNoCapFraming) {
			listener.enterExpressionNoCapFraming(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitExpressionNoCapFraming) {
			listener.exitExpressionNoCapFraming(this);
		}
	}
}


export class ExpressionParContext extends ParserRuleContext {
	public csvBoolean(): CsvBooleanContext {
		return this.getRuleContext(0, CsvBooleanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_expressionPar; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterExpressionPar) {
			listener.enterExpressionPar(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitExpressionPar) {
			listener.exitExpressionPar(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public infixBoolean(): InfixBooleanContext[];
	public infixBoolean(i: number): InfixBooleanContext;
	public infixBoolean(i?: number): InfixBooleanContext | InfixBooleanContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfixBooleanContext);
		} else {
			return this.getRuleContext(i, InfixBooleanContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_expressionList; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public TermWithExclusion(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.TermWithExclusion, 0); }
	public FieldOrTerm(): TerminalNode | undefined { return this.tryGetToken(PQL2Parser.FieldOrTerm, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_term; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public Selector(): TerminalNode { return this.getToken(PQL2Parser.Selector, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_selector; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
}


export class WeightContext extends ParserRuleContext {
	public Weight(): TerminalNode { return this.getToken(PQL2Parser.Weight, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_weight; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterWeight) {
			listener.enterWeight(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitWeight) {
			listener.exitWeight(this);
		}
	}
}


export class FieldRuleContext extends ParserRuleContext {
	public FieldOrTerm(): TerminalNode { return this.getToken(PQL2Parser.FieldOrTerm, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PQL2Parser.RULE_fieldRule; }
	// @Override
	public enterRule(listener: PQL2Listener): void {
		if (listener.enterFieldRule) {
			listener.enterFieldRule(this);
		}
	}
	// @Override
	public exitRule(listener: PQL2Listener): void {
		if (listener.exitFieldRule) {
			listener.exitFieldRule(this);
		}
	}
}


