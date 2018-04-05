import React from 'react';
import ReactDOM from 'react-dom';
import ChartCard from '../src/components/ChartCard';

describe('ChartCard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ChartCard classes={{}} statIcon={()=> null} chart={{}}/>, div);
    });
});
