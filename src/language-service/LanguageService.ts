import {QueryContext} from "../ANTLR/PQL2Parser";
import {parseAndGetASTRoot, parseAndGetSyntaxErrors} from "./parser";
import {ILangError} from "./LangErrorListener";

export default class LangLanguageService {
  validate(code: string): ILangError[] {
    const syntaxErrors: ILangError[] = parseAndGetSyntaxErrors(code);
    const ast: QueryContext = parseAndGetASTRoot(code);

    return syntaxErrors.concat(checkSemanticRules(ast));
  }

  format(code: string): string {
    // if the code contains errors, no need to format, because this way of formating the code, will remove some of the code
    // to make things simple, we only allow formatting a valide code
    if (this.validate(code).length > 0) return code;

    let formattedCode = "";
    const ast: QueryContext = parseAndGetASTRoot(code);

    // formatting here
    ast.children.forEach(node => {
    });

    return formattedCode;
  }
}

function checkSemanticRules(ast: QueryContext): ILangError[] {
  const errors: ILangError[] = [];

  // semantic errors here
  ast.children.forEach(node => {
  })

  return errors;
}
