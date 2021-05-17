import {QueryContext} from "../ANTLR/PQL2Parser";
import {parseAndGetASTRoot, parseAndGetSyntaxErrors} from "./parser";
import {ILangError} from "./LangErrorListener";
import {ParseTree} from 'antlr4ts/tree';

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

    const walkChildren = (children: QueryContext['children'], callback: (child: any) => void) => {
      if (children.length === 0) return;

      children.forEach((child) => {
        // @ts-ignore
        return child.childCount > 0 ? walkChildren(child.children, callback) : callback(child);
      })
    }

    const transformNode = ({text}: ParseTree) => {
      switch (text.toUpperCase()) {
        case 'NOT':
        case 'NOV':
        case 'S':
        case 'L':
        case 'P':
        case 'F':
        case 'IN':
        case 'YES':
        case 'NO':
        case 'HIGH':
        case 'LOW':
        case 'SAME':
        case 'EN':
        case 'FR':
        case 'DE':
        case 'CPC':
        case 'AND':
        case 'OR':
          formattedCode += ` ${text.toUpperCase()}`;
          break;
        case '(':
          formattedCode += ` ${text}\n`;
          break;
        case ')':
          formattedCode += `\n${text}`;
          break;
        case '<EOF>':
          break;
        default:
          formattedCode += ` ${text}`;
          break;
      }
    }

    walkChildren(ast.children, transformNode);

    return formattedCode.trim();
  }
}

function checkSemanticRules(ast: QueryContext): ILangError[] {
  const errors: ILangError[] = [];

  // semantic errors here
  ast.children.forEach(node => {
  })

  return errors;
}
