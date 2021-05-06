import * as React from 'react';
import * as monaco from 'monaco-editor-core';

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

  React.useEffect(() => {
    if (!divNode) return;

    monaco.editor.create(divNode, {
      value: '',
      language,
      theme: 'pqlTheme',
      minimap: {enabled: false},
      autoIndent: true
    });
  }, [assignRef])

  return <div ref={assignRef} style={{height: '300px', width: '500px', border: '1px solid #ccc'}}/>;
}

export default Editor;
