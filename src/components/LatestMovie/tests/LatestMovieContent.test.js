import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LatestMovieContent from '../LatestMovieContent';

describe('<Content/>', () => {
  const component = (
    <LatestMovieContent>
      <div>Test</div>
    </LatestMovieContent>
  );

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should coantain a <div/> as a children', () => {
    const wrapper = shallow(component);
    expect(wrapper.children().find('div')).toHaveLength(1);
    expect(wrapper.children().find('div').props().children).toBe('Test');
  });
});
