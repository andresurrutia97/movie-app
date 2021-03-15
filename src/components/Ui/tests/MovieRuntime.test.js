import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieRuntime from '../MovieRuntime';

describe('<MovieRuntime/>', () => {
  const component = <MovieRuntime runtime={123} />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text equal to "123 min"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toBe('123 min');
  });
});
