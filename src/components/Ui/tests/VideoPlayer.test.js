import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ReactPlayer from 'react-player';

import VideoPlayer from '../VideoPlayer';

describe('<VideoPlayer />', () => {
  const component = <VideoPlayer url="videoUrl" />;

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an instance of <ReactPlayer/> with the url equal to "videoUrl"', () => {
    const wrapper = mount(component);
    expect(wrapper.find(ReactPlayer)).toHaveLength(1);
    expect(wrapper.find(ReactPlayer).props().url).toBe('videoUrl');
  });
});
