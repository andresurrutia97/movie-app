import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Shadow from '../Shadow';

describe('<Shadow/>', () => {
  const component = <Shadow />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a <div/> tag with a className equal to "latest-movie__shadow"', () => {
    const wrapper = shallow(component);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.props().className).toBe('latest-movie__shadow');
  });
});
