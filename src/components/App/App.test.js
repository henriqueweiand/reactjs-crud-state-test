import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import Routes from '~/routes';

xit('should render as expected', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.contains(<Routes />)).toBe(true);
});
