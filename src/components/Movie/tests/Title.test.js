import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Title from '../Title';

describe('<Title/>', () => {
  const component = <Title title="Test" />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text equal to "Test"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toBe('Test');
  });
});
