import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import UserPicture from '../UserPicture';
import defaultImg from '../../../img/default-user-image.png';

describe('<UserPicture/>', () => {
  const component = <UserPicture />;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an image source equal to the default user image path', () => {
    expect(wrapper.props().src).toBe(defaultImg);
  });

  it('should contain an image source equal to the path given', () => {
    wrapper.setProps({ img: 'path.jpg' });
    expect(wrapper.props().src).toBe('path.jpg');
  });
});
