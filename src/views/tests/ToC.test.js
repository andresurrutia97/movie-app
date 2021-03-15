import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import TOCView from '../ToC';
import Button from '../../components/Ui/Button';

jest.mock('@auth0/auth0-react');

describe('<TOC/>', () => {
  const component = (
    <BrowserRouter>
      <TOCView />
    </BrowserRouter>
  );
  const loginMock = jest.fn();
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: loginMock,
      isAuthenticated: false,
    });
  });

  it('should render correcty ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not display a login Button if the user is authenticated', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
    });
    const wrapper = mount(component);
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  it('should display a login Button if the user is not authenticated', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
    });
    const wrapper = mount(component);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should call the login function when click on the login button', () => {
    const wrapper = mount(component);

    wrapper.find(Button).simulate('click');
    expect(loginMock).toBeCalledTimes(1);
  });
});
