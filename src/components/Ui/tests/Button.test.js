import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button/>', () => {
  const mockfn = jest.fn();
  const component = <Button onClick={mockfn}>Test</Button>;

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call the mockFn function when click', () => {
    wrapper.simulate('click');
    expect(mockfn).toBeCalledTimes(1);
  });

  it('should have "test" as text', () => {
    expect(wrapper.props().children).toEqual('Test');
  });
});
