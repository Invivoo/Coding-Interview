import * as React from 'react';
import { App } from './App';
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
    const combo = app.find('#languageCombo');

    combo.simulate('change', { target: { value: 'csharp' } });

    const aceEditor = app.find(AceEditor);

    expect(aceEditor.props().mode).toBe('csharp');
});
