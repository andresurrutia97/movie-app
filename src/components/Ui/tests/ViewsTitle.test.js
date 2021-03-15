import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ViewsTitle from '../ViewsTitle';

describe('<ViewsTitle/>', () => {
  const component = <ViewsTitle>Test</ViewsTitle>;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should coantain a children text equal to "Test"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toBe('Test');
  });
});
