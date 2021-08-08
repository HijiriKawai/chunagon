import React, { VFC } from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';

type EditorProps = {
  theme: 'solarized_dark' | 'solarized_light';
  fontsize: number;
};

export const Editor: VFC<EditorProps> = (props: EditorProps) => {
  const { theme, fontsize } = props;
  return (
    <AceEditor
      mode="javascript"
      theme={theme}
      fontSize={fontsize}
      showPrintMargin
      showGutter
      highlightActiveLine
      value={`console.log("Hello World!");`}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
