import React, {useEffect} from 'react';

import { Button, Row } from 'antd';
import * as monaco from 'monaco-editor';
import { useTranslation } from 'react-i18next';

const editorStyle = {height: '500px'};

function AddCode() {
  const { t } = useTranslation();
  var editor;

  useEffect(() => {
    editor = monaco.editor.create(document.getElementById("container"), {
    	value: "#include <iostream>\n\talert('Hello world!');\n}",
    	language: "cpp"
    });
  });

  function submitCode() {
    console.log(editor.getValue());
  }

  return (
    <>
      <div className="site-layout-content">
        <h1>{t('Add your code')}</h1>
        <div id="container" style={editorStyle}></div>
        <Button type="primary" id="submit-button" onClick={submitCode}>
          {t('Submit')}
        </Button>
      </div>
    </>
  );
}

export default AddCode;
