import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from '../src/components/RadioButton';

describe('RadioButton', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RadioButton/>, div);
    });
});
