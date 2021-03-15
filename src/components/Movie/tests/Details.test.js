import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Details from '../Details';

describe('<Details/>', () => {
  const component = <Details title="Genre" name="Horror" />;

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain a <span/> for each prop', () => {
    const wrapper = shallow(component);
    expect(wrapper.find('span').at(0).props().children).toBe('Genre');
    expect(wrapper.find('span').at(2).props().children).toBe('Horror');
  });
});
