import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

it('should render as expected', () => {
  const wrapper = shallow(<App />);

  console.log(wrapper.html());
  // expect(wrapper.contains(<InputPassword />)).toBeCalled(true);
});
