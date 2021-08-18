import React, { useEffect, useState, VFC } from 'react';
import { Editor } from '../../atoms/Editor';
import { ExecuteButton } from '../../atoms/ExecuteButton';

export const QuestionAnswer: VFC = () => {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    setCode(`console.log("Hello World!");`);
  }, []);

  return (
    <>
      <Editor theme="solarized_dark" fontsize={14} value={code} onChange={setCode} />
      <ExecuteButton code={code} />
    </>
  );
};
