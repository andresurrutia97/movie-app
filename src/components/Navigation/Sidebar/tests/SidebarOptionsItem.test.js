import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SidebarOptionsItem from '../SidebarOptionsItem';

describe('<SidebarOptionsItem />', () => {
  const component = (
    <BrowserRouter>
      <SidebarOptionsItem path="/home" name="Home" />
    </BrowserRouter>
  );

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have a path prop equal to "/home", a name prop equal to "Home"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children.props.path).toEqual('/home');
    expect(wrapper.props().children.props.name).toEqual('Home');
  });
});
