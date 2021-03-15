import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ImageCarousel from '../ImageCarousel';
import ImageCard from '../ImageCard';

describe('<ImageCarousel/>', () => {
  const component = <ImageCarousel />;

  it('should render correcty ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an instance of an <ImageCard/> ', () => {
    const wrapper = shallow(
      <ImageCarousel>
        <ImageCard imgUrl="path" />
      </ImageCarousel>
    );
    expect(wrapper.find(ImageCard)).toHaveLength(1);
  });
});
