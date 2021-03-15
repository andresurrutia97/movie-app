import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Error from '../Error';

describe('<Error/>', () => {
  const component = <Error />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a <p> tag with a text equal to "Something went wrong"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toBe('Something went wrong');
  });
});
