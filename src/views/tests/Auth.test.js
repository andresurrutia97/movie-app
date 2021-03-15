import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Auth from '../Auth';
import AuthContent from '../../components/Auth/AuthContent';
import ImgBackground from '../../components/Auth/imgBackground';
import Login from '../../components/Auth/Login';

describe('<Auth/>', () => {
  const component = (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an instance of <ImgBackground/> <Content/> and <Login/>', () => {
    const wrapper = mount(component);
    expect(wrapper.find(ImgBackground)).toHaveLength(1);
    expect(wrapper.find(AuthContent)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
