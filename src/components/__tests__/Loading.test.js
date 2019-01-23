import React from 'react';
import { mount } from 'enzyme';
import Loading from '../Loading';

describe('Loading component', () => {
  it('should render as expected', () => {
    const wrapper = mount(<Loading />);

    expect(wrapper.find('FaSpinner')).toHaveLength(1);
  });
});
