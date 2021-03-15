import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Login from '../Login';
import Button from '../../Ui/Button';

describe('<Login/>', () => {
  const loginFn = jest.fn();
  const component = (
    <BrowserRouter>
      <Login login={loginFn} />
    </BrowserRouter>
  );

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call the login function when click on login button', () => {
    const wrapper = mount(component);
    wrapper.find(Button).simulate('click');
    expect(loginFn).toBeCalledTimes(1);
  });
});
