// jest.unmock('../src/components/Dashboard');

import React from 'react';
// import TestUtils from 'react-dom/test-utils';
// import { shallow, mount, render } from 'enzyme';
import Dashboard from '../src/components/Dashboard';

describe('Dashboard', function() {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboard />)
  });

  it('should render with the Dashboard class', function() {
    // const div = TestUtils.findRenderedDOMComponentWithClass(component, 'dashboard');
    // expect(div).toBeDefined
    expect(component.find('AddAssessmentButton').length).toBe(1)
  });
});
