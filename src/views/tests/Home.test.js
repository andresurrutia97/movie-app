import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Home from '../Home';
import { moviesData, movieInfo } from '../../utils/fakeData';
import Spinner from '../../components/Ui/Spinner';
import Carousel from '../../components/Ui/Carousel';
import LatestMovie from '../../components/LatestMovie';
import Error from '../../components/Ui/Error';

describe('<Home/>', () => {
  let wrapper;
  const initProps = {
    popularMovies: null,
    topRatedMovies: null,
    latestMovie: null,
    errorLatest: null,
    errorPopular: null,
    errorTopRated: null,
    loadingPopularMovies: false,
    loadingTopRatedMovies: false,
    loadingLatestMovie: false,
  };

  const component = (
    <BrowserRouter>
      <Home {...initProps} />
    </BrowserRouter>
  );

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should render correcty ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain 3 instances of <Spinner/> while no info ', () => {
    expect(wrapper.find(Spinner)).toHaveLength(3);
  });

  it('should contain 2 instances of <Carousel/> if popularMovies and topRatedMovies props contain info  ', () => {
    wrapper.setProps({
      children: (
        <Home
          popularMovies={moviesData.results}
          topRatedMovies={moviesData.results}
        />
      ),
    });
    expect(wrapper.find(Carousel)).toHaveLength(2);
  });

  it('should contain an instance of <LatestMovie/> if latestMovie prop contains info  ', () => {
    wrapper.setProps({
      children: <Home latestMovie={movieInfo} />,
    });
    expect(wrapper.find(LatestMovie)).toHaveLength(1);
  });

  it('should contain 1 instance of <Error/> if errorLatest prop caintains info ', () => {
    wrapper.setProps({
      children: <Home errorLatest={{ error: 'error' }} />,
    });
    expect(wrapper.find(Error)).toHaveLength(1);
  });
});
