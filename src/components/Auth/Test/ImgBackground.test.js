import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ImgBackground from '../ImgBackground';

describe('<ImgBackground/>', () => {
  const component = <ImgBackground img="/imgPath" />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an element with a brackground src that includes the path given', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().style.backgroundImage).toMatch(
      new RegExp('/imgPath')
    );
  });
});
