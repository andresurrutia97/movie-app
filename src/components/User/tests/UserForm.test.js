import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import UserForm from '../UserForm';
import Input from '../../Ui/InputContainer';
import form from '../../../views/User/UserForm';

describe('<UserForm/>', () => {
  const elementsMock = Object.keys(form).map((control) => {
    return { id: control, config: form[control] };
  });

  const component = <UserForm elements={elementsMock} />;

  it('should render correctly ', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain 4 instances of <Input/>', () => {
    const wrapper = mount(component);
    expect(wrapper.find(Input)).toHaveLength(4);
  });
});
