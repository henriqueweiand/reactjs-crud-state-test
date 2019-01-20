import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Routes from '~/routes';

describe('App component', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Routes />)).toBe(true);
  });
});
