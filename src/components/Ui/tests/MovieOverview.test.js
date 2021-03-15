import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieOverview from '../MovieOverview';

describe('<MovieOverview/>', () => {
  const component = <MovieOverview overview="text" />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a <p> tag with a text equal to "text"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toBe('text');
  });
});
