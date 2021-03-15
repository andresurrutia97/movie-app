import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeaderTitle from '../HeaderTitle';

describe('<HeaderTitle />', () => {
  const component = <HeaderTitle title="test" />;

  it('should render correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have title prop equal to "test"', () => {
    const wrapper = shallow(component);
    expect(wrapper.props().children).toEqual('test');
  });
});
