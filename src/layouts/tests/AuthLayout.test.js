import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import AuthLayout from '../AuthLayout';

describe('<AuthLayout/>', () => {
  const component = (
    <AuthLayout>
      <div>Test</div>
    </AuthLayout>
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
