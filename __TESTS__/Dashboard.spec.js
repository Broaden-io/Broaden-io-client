jest.unmock('../src/components/Dashboard');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Dashboard from '../src/components/Dashboard';

describe('Dashboard', function() {
  let component;

  beforeEach(() => {

    component = TestUtils.renderIntoDocument(
      <Dashboard />
    );
  });

  it('should render with the Dashboard class', function() {
    const div = TestUtils.findRenderedDOMComponentWithClass(component, 'dashboard');

    expect(div).toBeDefined();
  });

  it('should be selectable by class "dashboard"', function() {
    expect(shallow(<Dashboard />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Dashboard />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Dashboard />).text()).toEqual('Dashboard');
  });
});
