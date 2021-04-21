import * as monaco from "monaco-editor-core";
import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const richLanguageConfiguration: IRichLanguageConfiguration = {};

export const monarchLanguage = <ILanguage>{
  defaultToken: 'invalid',

  keywords: ['AND', 'OR', 'nUG', 'nOG', 'nD', 'nW', 'S', 'L', 'P', 'F', 'IN', 'YES', 'NO'],

  typeKeywords: ['NOT', 'NOV', '!nD', '!nW', '!S', '!L', '!P', '!F', '!IN'],

  operators: [',', '=', '>', '>=', '<', '<=', ')', '(', '|', '&'],

  brackets: [
    {open: '{', close: '}', token: 'delimiter.curly'},
    {open: '[', close: ']', token: 'delimiter.square'},
    {open: '(', close: ')', token: 'delimiter.parenthesis'},
    {open: '<', close: '>', token: 'delimiter.angle'}
  ],

  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  tokenizer: {
    root: [
      // identifiers and keywords
      [/[a-zA-Z_$][\w$]*/, {
        cases: {
          '@keywords': {token: 'keyword'},
          '@typeKeywords': {token: 'type'},
          '@default': 'identifier'
        }
      }],

      // whitespace
      {include: '@whitespace'},
    ],

    whitespace: [
      [/[ \t\r\n]+/, ''],
    ],

    string: [
      [/[^\\"]+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/"/, 'string', '@pop']
    ]
  },
}
