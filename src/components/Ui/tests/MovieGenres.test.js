import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieGenres from '../MovieGenres';

describe('<MovieGenres/>', () => {
  const genres = [{ name: 'horror' }, { name: 'comedy' }];
  const component = <MovieGenres genres={genres} />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain an element with a string that has the name of the genres ', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toMatch(new RegExp('horror'));
    expect(wrapper.props().children).toMatch(new RegExp('comedy'));
  });
});
