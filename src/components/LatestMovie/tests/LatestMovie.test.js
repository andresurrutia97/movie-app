import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import LatestMovie from '../index';
import LatestMovieContent from '../LatestMovieContent';
import Shadow from '../Shadow';
import Background from '../Background';
import Title from '../../Ui/MovieTitle';
import Genres from '../../Ui/MovieGenres';
import Runtime from '../../Ui/MovieRuntime';
import Overview from '../../Ui/MovieOverview';
import Button from '../../Ui/Button';

describe('<LatestMovie/>', () => {
  const movie = {
    id: 123,
    backdrop_path: '/path',
    title: 'title',
    genres: [{ name: 'horror' }],
    runtime: 98,
    overview: 'overview',
  };

  const component = (
    <BrowserRouter>
      <LatestMovie movie={movie} history={[]} />
    </BrowserRouter>
  );
  let wrapper;
  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain one instance of <Content/>, <Shadow/>, <Background/> ', () => {
    expect(wrapper.find(LatestMovieContent)).toHaveLength(1);
    expect(wrapper.find(Shadow)).toHaveLength(1);
    expect(wrapper.find(Background)).toHaveLength(1);
  });

  it('inside <Content/> sould be an instance of <Title/>, <Genres/>, <Runtime/>, <Overview/> and <Button/>', () => {
    expect(wrapper.find(LatestMovieContent).find(Title)).toHaveLength(1);
    expect(wrapper.find(LatestMovieContent).find(Genres)).toHaveLength(1);
    expect(wrapper.find(LatestMovieContent).find(Runtime)).toHaveLength(1);
    expect(wrapper.find(LatestMovieContent).find(Overview)).toHaveLength(1);
    expect(wrapper.find(LatestMovieContent).find(Button)).toHaveLength(1);
  });
});
