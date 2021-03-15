import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Separator from '../Separator';

describe('<Separator/>', () => {
  const component = <Separator />;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an <hr/> tag', () => {
    expect(wrapper.find('hr')).toHaveLength(1);
  });

  it('should have className prop equal to "mb-5 border-gray-600"', () => {
    expect(wrapper.props().className).toBe('mb-5 border-gray-600');
  });
});
