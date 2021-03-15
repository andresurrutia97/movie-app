import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import InfoMovie from '../InfoMovie';
import Title from '../Title';
import Genres from '../../Ui/MovieGenres';
import Overview from '../Overview';
import Details from '../Details';

describe('<InfoMovie/>', () => {
  const movie = {
    release_date: '2020-01-02',
    production_countries: [],
    backdrop_path: '/path',
    title: 'title',
    genres: [{ name: 'horror' }],
    runtime: 98,
    overview: 'overview',
  };

  const component = <InfoMovie data={movie} />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain one instance of <Title/>, <Genres/>, <Overview/> and 3 of <Details/> ', () => {
    const wrapper = shallow(component);

    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Genres)).toHaveLength(1);
    expect(wrapper.find(Overview)).toHaveLength(1);
    expect(wrapper.find(Details)).toHaveLength(3);
  });
});
