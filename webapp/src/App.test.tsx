import * as React from 'react';
import { App } from './App';
import { configure, shallow } from 'enzyme';

var Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });
test('ace mode mirrors selected language', () => {
    const app = shallow(<App />);
    console.log(app);
    expect(app).not.toBe(null);
});

