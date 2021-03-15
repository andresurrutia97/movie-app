import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

import HeaderOptions from '../HeaderOptions';
import HeaderOptionsItem from '../HeaderOptionsItem';
import Dropdown from '../UserDropdown/UserDropdown';

import * as ReduxHooks from '../../../../utils/reduxHooks';

describe('<HeaderOptions/>', () => {
  let store;
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: 'Home',
    },
  ];
  let wrapper;
  const component = (
    <BrowserRouter>
      <HeaderOptions routes={routes} />
    </BrowserRouter>
  );

  beforeEach(() => {
    store = configureStore([thunk])({});
    jest
      .spyOn(ReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());
    wrapper = mount(component);
  });

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain one instance of <HeaderOptionsItem/> and <Dropdown/>', () => {
    expect(wrapper.find(HeaderOptionsItem)).toHaveLength(1);
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });
});
