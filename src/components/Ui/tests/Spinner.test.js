import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';

describe('<Spinner/>', () => {
  const component = <Spinner />;

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have className prop equal to "spinner"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().className).toBe('spinner');
  });
});
