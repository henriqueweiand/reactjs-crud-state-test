import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';

describe('Field component', () => {
  const props = {
    title: 'Teste component',
    children: <div />,
  };

  it('should render as expected', () => {
    const wrapper = shallow(<Field {...props} />);

    expect(wrapper.contains('Teste component')).toBe(true);
  });
});
