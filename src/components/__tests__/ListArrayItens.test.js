import React from 'react';
import { shallow } from 'enzyme';
import ListArrayItens from '../ListArrayItens';

describe('ListArrayItens component', () => {
  const props = {
    data: [
      {
        id: 1,
        name: 'teste1',
      },
      {
        id: 2,
        name: 'teste2',
      },
    ],
    params: {
      id: 'id',
      label: 'name',
    },
  };

  it('should render as expected', () => {
    const wrapper = shallow(<ListArrayItens {...props} />);

    expect(wrapper.find('.itemListArrayItens')).toHaveLength(2);
  });
});
