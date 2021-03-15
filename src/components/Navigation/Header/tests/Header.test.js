import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Header from '../index';
import * as ReduxHooks from '../../../../utils/reduxHooks';

describe('<Header />', () => {
  const component = (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  let store;

  beforeEach(() => {
    store = configureStore([thunk])({});
    jest
      .spyOn(ReduxHooks, 'useSelector')
      .mockImplementation(() => store.getState());
  });

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
