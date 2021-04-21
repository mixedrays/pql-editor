import * as React from 'react';
import * as monaco from 'monaco-editor-core';

const Editor: React.FC<{ language: string; }> = ({language}) => {
  let divNode;
  const assignRef = React.useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
  }, []);

  React.useEffect(() => {
    if (!divNode) return;

    monaco.editor.create(divNode, {
      value: '',
      language,
      minimap: {enabled: false},
      autoIndent: true
    });
  }, [assignRef])

  return <div ref={assignRef} style={{height: '300px', width: '500px', border: '1px solid #ccc'}}/>;
}

export default Editor;
