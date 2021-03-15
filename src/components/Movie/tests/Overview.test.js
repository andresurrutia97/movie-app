import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Overview from '../Overview';

describe('<Overview/>', () => {
  const component = <Overview overview="overview" />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a <p> tag with a text equal to "overview"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toBe('overview');
  });
});
