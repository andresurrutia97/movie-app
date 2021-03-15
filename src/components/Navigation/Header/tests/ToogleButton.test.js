import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ToggleButton from '../ToggleButton';

describe('<ToggleButton />', () => {
  const mockFn = jest.fn();

  it('should render correctly', () => {
    const tree = renderer.create(<ToggleButton clicked={mockFn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call the mockFn function when click', () => {
    const wrapper = shallow(<ToggleButton clicked={mockFn} />);
    wrapper.find('button').simulate('click');
    expect(mockFn).toBeCalledTimes(1);
  });
});
