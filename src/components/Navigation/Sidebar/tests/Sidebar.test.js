import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from '../index';
import Backdrop from '../../../Ui/Backdrop';
import SidebarOptions from '../SidebarOptions';

describe('<Sidebar/>', () => {
  const openHandler = jest.fn();

  const component = (
    <BrowserRouter>
      <Sidebar open={false} openHandler={openHandler} />
    </BrowserRouter>
  );

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an instance of a <Backdrop/> and a <SidebarOptions/>', () => {
    const wrapper = mount(component);

    expect(wrapper.contains(Backdrop)).toBeTruthy();
    expect(wrapper.contains(SidebarOptions)).toBeTruthy();
  });
});
