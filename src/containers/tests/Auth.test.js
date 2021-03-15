import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Auth from '../Auth';

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
});
