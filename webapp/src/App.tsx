import * as React from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="topSection" style={{ height: '44px' }}>
          <div id="selector" style={{ top: '11px', position: 'absolute', right: '0px'}} >
            <label>Select language: </label>
            <input name="language" list="languages" type="text" />
            <datalist id="languages">
              <option> C# </option>
              <option> Java </option>
              <option> Python </option>
              <option> JavaScript </option>
              <option> TypeScript </option>
            </datalist>
          </div>
        </div>
        <AceEditor
          mode="java"
          theme="github"
          name="code"
          fontSize={20}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          editorProps={{$blockScrolling: true}}
          width="100%"
          height="100%"
          style={{position: 'absolute'}}
          setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
          }}
        />,
      </div>
    );
  }
}

export default App;
