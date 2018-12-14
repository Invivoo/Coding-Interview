import * as React from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

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
        <div id="topSection" style={{ height: '44px' }}>
          <div id="selector" style={{ top: '11px', position: 'absolute', right: '0px'}} >
            <label>Select language: 
              <select 
                value={this.state.language} 
                style={{ 'marginLeft': '11px' }} 
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
