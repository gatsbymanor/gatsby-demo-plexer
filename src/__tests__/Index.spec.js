import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/Index';

describe('<Index />', () => {
  const component = shallow(
    <Index />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
