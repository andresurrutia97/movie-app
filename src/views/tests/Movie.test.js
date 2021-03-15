import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Movie from '../Movie';
import { movieInfo } from '../../utils/fakeData';
import Spinner from '../../components/Ui/Spinner';
import Error from '../../components/Ui/Error';
import VideoPlayer from '../../components/Ui/VideoPlayer';
import InfoMovie from '../../components/Movie/InfoMovie';

describe('<Movie/>', () => {
  let wrapper;
  const initProps = {
    movieInfo: null,
    loading: false,
    error: null,
  };

  const component = <Movie {...initProps} />;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should render correcty ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a instance of <Spinner/> while no info ', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should contain an instance of <VideoPlayer/>, <InfoMovie/> if latestMovie prop contains info', () => {
    wrapper.setProps({
      movieInfo: { movieInfo },
    });
    expect(wrapper.find(VideoPlayer)).toHaveLength(1);
    expect(wrapper.find(InfoMovie)).toHaveLength(1);
  });

  it('should contain 1 instance of <Error/> if error prop caintains info ', () => {
    wrapper.setProps({ error: { error: 'error' } });
    expect(wrapper.find(Error)).toHaveLength(1);
  });
});
