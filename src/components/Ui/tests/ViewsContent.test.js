import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ViewsContent from '../ViewsContent';

describe('<ViewsContent/>', () => {
  const component = (
    <ViewsContent>
      <div>Test</div>
    </ViewsContent>
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
