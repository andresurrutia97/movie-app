import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ImageCard from '../ImageCard';

describe('<ImageCard/>', () => {
  const component = <ImageCard imgUrl="path" />;

  it('should render correcty ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a backgroundImage url equal to "path" ', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().style.backgroundImage).toMatch(new RegExp('path'));
  });
});
