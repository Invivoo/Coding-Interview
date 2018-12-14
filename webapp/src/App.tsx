import * as React from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
