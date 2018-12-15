import * as React from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/csharp';
import 'brace/mode/python';
import 'brace/mode/javascript';
import 'brace/mode/typescript';
import 'brace/theme/github';
import 'brace/ext/language_tools';

export interface AppProps {
}

export interface AppState {
  language: string;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {language: 'javascript'};
  }

  render() {
    return (
      <div className="App">
        <div className="editorTopSection">
          <div className="editorLanguageSelector">
            <label>Select language: 
              <select 
                className="languageSelectionCombo"
                value={this.state.language} 
                onChange={(event) => this.setState({language: event.target.value})}
              >
                <option value="csharp">C#</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
              </select>
            </label>
          </div>
        </div>
        <AceEditor
          mode={this.state.language}
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
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          setOptions={{
                showLineNumbers: true,
                tabSize: 2,
          }}
        />,
      </div>
    );
  }
}

export default App;
