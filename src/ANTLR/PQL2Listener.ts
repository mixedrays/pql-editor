// Generated from ./PQL2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CsvBooleanExpressionContext } from "./PQL2Parser";
import { InfixProximityExpressionContext } from "./PQL2Parser";
import { InfixOutlineProximityExpressionContext } from "./PQL2Parser";
import { ImplicitInfixProximityLinkContext } from "./PQL2Parser";
import { ImplicitInfixOutlineProximityExpressionContext } from "./PQL2Parser";
import { UnaryBooleanExpressionContext } from "./PQL2Parser";
import { InfixBooleanExpressionContext } from "./PQL2Parser";
import { PresenceExpressionContext } from "./PQL2Parser";
import { InfixProximityLinkContext } from "./PQL2Parser";
import { FramingExpressionContext } from "./PQL2Parser";
import { NoCapFramingExpressionContext } from "./PQL2Parser";
import { SelectorExpressionContext } from "./PQL2Parser";
import { WeightExpressionContext } from "./PQL2Parser";
import { EqualityExpressionContext } from "./PQL2Parser";
import { RelationalExpressionContext } from "./PQL2Parser";
import { NoCapExpressionContext } from "./PQL2Parser";
import { ParenthesisExpressionContext } from "./PQL2Parser";
import { TermExpressionContext } from "./PQL2Parser";
import { LikeSelectorExpressionContext } from "./PQL2Parser";
import { SynonymBooleanOrExpressionContext } from "./PQL2Parser";
import { PrefixOrRelationalLinkContext } from "./PQL2Parser";
import { QueryContext } from "./PQL2Parser";
import { CsvBooleanContext } from "./PQL2Parser";
import { InfixBooleanContext } from "./PQL2Parser";
import { InfixProximityContext } from "./PQL2Parser";
import { ImplicitInfixProximityContext } from "./PQL2Parser";
import { SynonymOrContext } from "./PQL2Parser";
import { PrefixOrRelationalContext } from "./PQL2Parser";
import { ExpressionFramingContext } from "./PQL2Parser";
import { ExpressionNoCapFramingContext } from "./PQL2Parser";
import { ExpressionParContext } from "./PQL2Parser";
import { ExpressionListContext } from "./PQL2Parser";
import { TermContext } from "./PQL2Parser";
import { SelectorContext } from "./PQL2Parser";
import { WeightContext } from "./PQL2Parser";
import { FieldRuleContext } from "./PQL2Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PQL2Parser`.
 */
export interface PQL2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `csvBooleanExpression`
	 * labeled alternative in `PQL2Parser.csvBoolean`.
	 * @param ctx the parse tree
	 */
	enterCsvBooleanExpression?: (ctx: CsvBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `csvBooleanExpression`
	 * labeled alternative in `PQL2Parser.csvBoolean`.
	 * @param ctx the parse tree
	 */
	exitCsvBooleanExpression?: (ctx: CsvBooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `infixProximityExpression`
	 * labeled alternative in `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	enterInfixProximityExpression?: (ctx: InfixProximityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `infixProximityExpression`
	 * labeled alternative in `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	exitInfixProximityExpression?: (ctx: InfixProximityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `infixOutlineProximityExpression`
	 * labeled alternative in `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	enterInfixOutlineProximityExpression?: (ctx: InfixOutlineProximityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `infixOutlineProximityExpression`
	 * labeled alternative in `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	exitInfixOutlineProximityExpression?: (ctx: InfixOutlineProximityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `implicitInfixProximityLink`
	 * labeled alternative in `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	enterImplicitInfixProximityLink?: (ctx: ImplicitInfixProximityLinkContext) => void;
	/**
	 * Exit a parse tree produced by the `implicitInfixProximityLink`
	 * labeled alternative in `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	exitImplicitInfixProximityLink?: (ctx: ImplicitInfixProximityLinkContext) => void;

	/**
	 * Enter a parse tree produced by the `implicitInfixOutlineProximityExpression`
	 * labeled alternative in `PQL2Parser.implicitInfixProximity`.
	 * @param ctx the parse tree
	 */
	enterImplicitInfixOutlineProximityExpression?: (ctx: ImplicitInfixOutlineProximityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `implicitInfixOutlineProximityExpression`
	 * labeled alternative in `PQL2Parser.implicitInfixProximity`.
	 * @param ctx the parse tree
	 */
	exitImplicitInfixOutlineProximityExpression?: (ctx: ImplicitInfixOutlineProximityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryBooleanExpression`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	enterUnaryBooleanExpression?: (ctx: UnaryBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryBooleanExpression`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	exitUnaryBooleanExpression?: (ctx: UnaryBooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `infixBooleanExpression`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	enterInfixBooleanExpression?: (ctx: InfixBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `infixBooleanExpression`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	exitInfixBooleanExpression?: (ctx: InfixBooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `presenceExpression`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	enterPresenceExpression?: (ctx: PresenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `presenceExpression`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	exitPresenceExpression?: (ctx: PresenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `infixProximityLink`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	enterInfixProximityLink?: (ctx: InfixProximityLinkContext) => void;
	/**
	 * Exit a parse tree produced by the `infixProximityLink`
	 * labeled alternative in `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	exitInfixProximityLink?: (ctx: InfixProximityLinkContext) => void;

	/**
	 * Enter a parse tree produced by the `framingExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterFramingExpression?: (ctx: FramingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `framingExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitFramingExpression?: (ctx: FramingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `noCapFramingExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterNoCapFramingExpression?: (ctx: NoCapFramingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `noCapFramingExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitNoCapFramingExpression?: (ctx: NoCapFramingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `selectorExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterSelectorExpression?: (ctx: SelectorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `selectorExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitSelectorExpression?: (ctx: SelectorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `weightExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterWeightExpression?: (ctx: WeightExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `weightExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitWeightExpression?: (ctx: WeightExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `noCapExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterNoCapExpression?: (ctx: NoCapExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `noCapExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitNoCapExpression?: (ctx: NoCapExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `termExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterTermExpression?: (ctx: TermExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `termExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitTermExpression?: (ctx: TermExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `likeSelectorExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterLikeSelectorExpression?: (ctx: LikeSelectorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `likeSelectorExpression`
	 * labeled alternative in `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitLikeSelectorExpression?: (ctx: LikeSelectorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `synonymBooleanOrExpression`
	 * labeled alternative in `PQL2Parser.synonymOr`.
	 * @param ctx the parse tree
	 */
	enterSynonymBooleanOrExpression?: (ctx: SynonymBooleanOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `synonymBooleanOrExpression`
	 * labeled alternative in `PQL2Parser.synonymOr`.
	 * @param ctx the parse tree
	 */
	exitSynonymBooleanOrExpression?: (ctx: SynonymBooleanOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `prefixOrRelationalLink`
	 * labeled alternative in `PQL2Parser.synonymOr`.
	 * @param ctx the parse tree
	 */
	enterPrefixOrRelationalLink?: (ctx: PrefixOrRelationalLinkContext) => void;
	/**
	 * Exit a parse tree produced by the `prefixOrRelationalLink`
	 * labeled alternative in `PQL2Parser.synonymOr`.
	 * @param ctx the parse tree
	 */
	exitPrefixOrRelationalLink?: (ctx: PrefixOrRelationalLinkContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.csvBoolean`.
	 * @param ctx the parse tree
	 */
	enterCsvBoolean?: (ctx: CsvBooleanContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.csvBoolean`.
	 * @param ctx the parse tree
	 */
	exitCsvBoolean?: (ctx: CsvBooleanContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	enterInfixBoolean?: (ctx: InfixBooleanContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.infixBoolean`.
	 * @param ctx the parse tree
	 */
	exitInfixBoolean?: (ctx: InfixBooleanContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	enterInfixProximity?: (ctx: InfixProximityContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.infixProximity`.
	 * @param ctx the parse tree
	 */
	exitInfixProximity?: (ctx: InfixProximityContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.implicitInfixProximity`.
	 * @param ctx the parse tree
	 */
	enterImplicitInfixProximity?: (ctx: ImplicitInfixProximityContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.implicitInfixProximity`.
	 * @param ctx the parse tree
	 */
	exitImplicitInfixProximity?: (ctx: ImplicitInfixProximityContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.synonymOr`.
	 * @param ctx the parse tree
	 */
	enterSynonymOr?: (ctx: SynonymOrContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.synonymOr`.
	 * @param ctx the parse tree
	 */
	exitSynonymOr?: (ctx: SynonymOrContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	enterPrefixOrRelational?: (ctx: PrefixOrRelationalContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.prefixOrRelational`.
	 * @param ctx the parse tree
	 */
	exitPrefixOrRelational?: (ctx: PrefixOrRelationalContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.expressionFraming`.
	 * @param ctx the parse tree
	 */
	enterExpressionFraming?: (ctx: ExpressionFramingContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.expressionFraming`.
	 * @param ctx the parse tree
	 */
	exitExpressionFraming?: (ctx: ExpressionFramingContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.expressionNoCapFraming`.
	 * @param ctx the parse tree
	 */
	enterExpressionNoCapFraming?: (ctx: ExpressionNoCapFramingContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.expressionNoCapFraming`.
	 * @param ctx the parse tree
	 */
	exitExpressionNoCapFraming?: (ctx: ExpressionNoCapFramingContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.expressionPar`.
	 * @param ctx the parse tree
	 */
	enterExpressionPar?: (ctx: ExpressionParContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.expressionPar`.
	 * @param ctx the parse tree
	 */
	exitExpressionPar?: (ctx: ExpressionParContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.weight`.
	 * @param ctx the parse tree
	 */
	enterWeight?: (ctx: WeightContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.weight`.
	 * @param ctx the parse tree
	 */
	exitWeight?: (ctx: WeightContext) => void;

	/**
	 * Enter a parse tree produced by `PQL2Parser.fieldRule`.
	 * @param ctx the parse tree
	 */
	enterFieldRule?: (ctx: FieldRuleContext) => void;
	/**
	 * Exit a parse tree produced by `PQL2Parser.fieldRule`.
	 * @param ctx the parse tree
	 */
	exitFieldRule?: (ctx: FieldRuleContext) => void;
}

