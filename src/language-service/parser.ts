import { PQL2Parser, QueryContext } from "../ANTLR/PQL2Parser";
import { PQL2Lexer } from "../ANTLR/PQL2Lexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { PQLErrorListener, ILangError } from "./LangErrorListener";

function parse(code: string): {ast:QueryContext, errors: ILangError[]} {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new PQL2Lexer(inputStream);

    const pqlErrorsListener = new PQLErrorListener();
    lexer.removeErrorListeners()
    lexer.addErrorListener(pqlErrorsListener);

    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PQL2Parser(tokenStream);

    parser.removeErrorListeners();
    parser.addErrorListener(pqlErrorsListener);

    const ast =  parser.query();
    const errors: ILangError[] = pqlErrorsListener.getErrors();

    console.log('AST', ast);
    console.log('ERRORS', errors);

    return {ast, errors};
}

export function parseAndGetASTRoot(code: string): QueryContext {
    const {ast} = parse(code);
    return ast;
}

export function parseAndGetSyntaxErrors(code: string): ILangError[] {
    const {errors} = parse(code);
    return errors;
}
