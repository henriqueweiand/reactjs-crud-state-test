import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import Routes from '~/routes';

it('should render as expected', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.contains(<Routes />)).toBe(true);
});
