import * as React from 'react';
import * as monaco from 'monaco-editor-core';

function createDependencyProposals(range) {
  // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
  // here you could do a server side lookup
  return [
    {
      label: 'AND operator and some description',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: "AND operator documentation",
      insertText: 'AND',
      range: range
    },
    {
      label: 'OR',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: "OR operator documentation",
      insertText: 'OR',
      range: range
    },
    {
      label: 'HIGH',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: "HIGH operator documentation",
      insertText: 'HIGH',
      range: range
    },
    {
      label: 'HI',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: "HI operator documentation",
      insertText: 'HI',
      range: range
    },
    {
      label: '"cpu" search concept autocomplete example',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: "~cpu",
      insertText: '~cpu (memory AND processor)',
      range: range
    },
    {
      label: '"heart" search concept autocomplete example',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: "~heart",
      insertText: '~heart (pulse AND pressure)',
      range: range
    }
  ];
}

const Editor: React.FC<{ language: string; }> = ({language}) => {
  let divNode;
  const assignRef = React.useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
  }, []);

  monaco.editor.defineTheme('pqlTheme', {
    base: "vs",
    inherit: true,
    rules: [
      {
        "background": "F8F8FF",
        "token": ""
      },
      {
        "foreground": "a61717",
        "background": "e3d2d2",
        "token": "invalid.illegal"
      },
      {
        "foreground": "999988",
        "token": "comment"
      },
      {
        "foreground": "536dfe",
        "token": "keyword"
      },
      {
        "foreground": "986801",
        "token": "excludeOperator"
      },
      {
        "foreground": "d500f9",
        "token": "operator"
      },
      {
        "foreground": "00b0ff",
        "token": "qualifier"
      },
      {
        "foreground": "00b0ff",
        "token": "hierarchyOperator"
      },
      {
        "foreground": "d500f9",
        "token": "separator"
      },
      {
        "foreground": "d500f9",
        "token": "delimiter"
      },
      {
        "foreground": "43a047",
        "token": "number"
      },
    ],
    colors: {
      "editor.foreground": "#000000",
      "editor.background": "#FFFFFF",
      "editor.selectionBackground": "#B4D5FE",
      "editor.lineHighlightBackground": "#EEEEEE",
      "editorCursor.foreground": "#666666",
      "editorWhitespace.foreground": "#BBBBBB"
    }
  });

  monaco.languages.registerCompletionItemProvider(language, {
    provideCompletionItems: function(model, position) {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      return {
        suggestions: createDependencyProposals(range)
      };
    }
  });

  React.useEffect(() => {
    if (!divNode) return;

    monaco.editor.create(divNode, {
      value: '',
      language,
      theme: 'pqlTheme',
      // lineNumbers: 'off',
      minimap: {enabled: false},
      autoIndent: true
    });
  }, [assignRef])

  return <div ref={assignRef} style={{height: '300px', width: '500px', border: '1px solid #ccc'}}/>;
}

export default Editor;
