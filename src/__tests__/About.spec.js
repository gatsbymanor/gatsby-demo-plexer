import React from 'react';
import renderer from 'react-test-renderer';
import About from '../pages/About';

describe('<About />', () => {
  const component = shallow(
    <About />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
