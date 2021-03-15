import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Background from '../Background';

describe('<Background/>', () => {
  const component = <Background img="/imgPath" />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a <img/> element with a image src that includes the path given', () => {
    const wrapper = shallow(component);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').props().src).toMatch(new RegExp('/imgPath'));
  });
});
