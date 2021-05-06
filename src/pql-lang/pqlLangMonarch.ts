import * as monaco from "monaco-editor-core";
import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const richLanguageConfiguration: IRichLanguageConfiguration = {
  comments: {
    blockComment: ['{', '}']
  },
};

export const monarchLanguage = <ILanguage>{
  defaultToken: 'invalid',

  keywords: ['AND', 'OR', 'nUG', 'nOG', 'nD', 'nW', 'S', 'L', 'P', 'F', 'IN', 'YES', 'NO'],

  excludingOperators: ['NOT', 'NOV', '!nD', '!nW', '!S', '!L', '!P', '!F', '!IN'],

  qualifiers: ['EN', 'FR', 'DE', 'CPC'],

  hierarchyOperators: ['HIGH', 'LOW', 'SAME'],

  operators: ['=', '>', '>=', '<', '<=', '|', '&', '~', '@', '/', '!', '^', '?', '+', '#', '$'],

  separators: [',', ':', '-', '_'],

  symbols: /[_,#@=><!~?:&|+\-*\/\^%$]/,

  brackets: [
    // {open: '{', close: '}', token: 'delimiter.curly'},
    {open: '[', close: ']', token: 'delimiter.square'},
    {open: '(', close: ')', token: 'delimiter.parenthesis'},
    // {open: '<', close: '>', token: 'delimiter.angle'}
  ],

  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  tokenizer: {
    root: [
      // delimiters and operators
      [/[()\[\]]/, '@brackets'],
      [/@symbols/, {
        cases: {
          '@operators': 'operator',
          '@separators': 'separator',
          '@default': ''
        }
      }],

      // identifiers and keywords
      [/[a-zA-Z][\w$]*/, {
        cases: {
          '@keywords': {token: 'keyword'},
          '@excludingOperators': {token: 'excludeOperator'},
          '@qualifiers': {token: 'qualifier'},
          '@hierarchyOperators': {token: 'hierarchyOperator'},
          '@default': 'identifier'
        }
      }],

      // digits
      [/\d+/, 'number'],

      // whitespace
      {include: '@whitespace'},

      //comments
      [/{/, 'comment', '@comment'],
    ],

    comment: [[/}/, 'comment', '@pop'], [/./, 'comment.content']],

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
