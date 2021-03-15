import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import SidebarOptions from '../SidebarOptions';
import SidebarOptionsItem from '../SidebarOptionsItem';

jest.mock('@auth0/auth0-react');

describe('<SidebarOptions />', () => {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: 'Home',
    },
  ];
  const close = jest.fn();
  const component = (
    <BrowserRouter>
      <SidebarOptions routes={routes} close={close} />
    </BrowserRouter>
  );

  const logoutMock = jest.fn();

  let wrapper;
  beforeEach(() => {
    useAuth0.mockReturnValue({
      logout: logoutMock,
    });
    wrapper = mount(component);
  });

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a instance of <SidebarOptionsItem/>', () => {
    expect(wrapper.find(SidebarOptionsItem)).toHaveLength(routes.length);
  });

  it('should call the close function when click an item', () => {
    wrapper.children().find('li').at(0).props().onClick();
    expect(close).toBeCalledTimes(1);
  });

  it('should call the logout function when click on logout button', () => {
    wrapper.children().find('li').at(1).props().onClick();
    expect(logoutMock).toBeCalledTimes(1);
  });
});
