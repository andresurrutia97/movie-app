import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Backdrop from '../Backdrop';

describe('<Backdrop/>', () => {
  const closed = jest.fn();
  const component = <Backdrop show={false} closed={closed} />;

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call the close function when click an item', () => {
    wrapper.simulate('click');
    expect(closed).toBeCalledTimes(1);
  });

  it('should be a block element when show prop is true', () => {
    expect(wrapper.props().className).toMatch(new RegExp('hidden'));
    wrapper.setProps({ show: true });
    expect(wrapper.props().className).toMatch(new RegExp('block'));
  });
});
