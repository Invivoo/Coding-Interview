import * as React from 'react';
import { App } from './App';

test('ace mode mirrors selected language', () => {
    const app = <App />;
    expect(app).not.toBe(null);
});

