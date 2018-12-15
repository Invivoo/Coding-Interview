import * as React from 'react';
import { App, AppState } from './App';
import AceEditor from 'react-ace';
import { configure, shallow } from 'enzyme';

var Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

test('ace mode mirrors selected language', () => {
    const app = shallow(<App />);
    app.setState({ language: 'csharp' });

    const aceEditor = app.find(AceEditor);

    expect(aceEditor.props().mode).toBe('csharp');
});

test('selection change updates editor mode', () => {
    const app = shallow(<App />);
    const combo = app.find('.languageSelectionCombo');

    combo.simulate('change', { target: { value: 'csharp' } });

    const aceEditor = app.find(AceEditor);

    expect(aceEditor.props().mode).toBe('csharp');
});

test('state code is shown in editor', () => {
    const app = shallow(<App />);
    const helloWorld = 'Console.WriteLine("Hello Word!");';
    app.setState({ language: 'csharp', sourceCode: helloWorld });

    const aceEditor = app.find(AceEditor);

    expect(aceEditor.props().value).toBe(helloWorld);
});

test('editor code is stored in state', () => {
    const app = shallow(<App />);
    const helloWorld = 'Console.WriteLine("Hello Word!");';

    const aceEditor = app.find(AceEditor);
    const onChangeHandler = aceEditor.props().onChange || (new Function());

    onChangeHandler(helloWorld);

    expect((app.state() as AppState).sourceCode).toBe(helloWorld);
});

test('selection change doesn\'t change source code', () => {
    const app = shallow(<App />);
    const helloWorld = 'Console.WriteLine("Hello Word!");';
    app.setState({ language: 'csharp', sourceCode: helloWorld });

    const combo = app.find('.languageSelectionCombo');
    combo.simulate('change', { target: { value: 'typescript' } });

    const aceEditor = app.find(AceEditor);
    expect(aceEditor.props().value).toBe(helloWorld);
});
