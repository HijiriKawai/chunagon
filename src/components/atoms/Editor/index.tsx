import { VFC } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ace';

type EditorProps = {
  theme: 'solarized_dark' | 'solarized_light';
  fontsize: number;
  value: string;
  onChange: (value: string, event?: any) => void;
};

export const Editor: VFC<EditorProps> = (props: EditorProps) => {
  const { theme, fontsize, value, onChange } = props;
  return (
    <AceEditor
      mode="javascript"
      theme={theme}
      fontSize={fontsize}
      onChange={onChange}
      showPrintMargin
      showGutter
      highlightActiveLine
      value={value}
      enableBasicAutocompletion
      enableLiveAutocompletion
      tabSize={2}
      setOptions={{
        showLineNumbers: true,
      }}
    />
  );
};
