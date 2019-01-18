import React from 'react';
import { shallow } from 'enzyme';
import formDocumentos from '../formDocumentos';
import createMockStore from 'redux-mock-store';

import { Creators as DocumentosActions } from '~/store/ducks/departamentos';

const INITIAL_STATE = {
  documentos: {
    data: [],
  },
};

const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE);

const newDocumentos = {
  codigo: 12,
  name: 'Teste pelo Enzyme',
  date: '2019-01-18',
  departamento: [
    {
      id: 1,
      name: 'Desenvolvimento',
    },
  ],
  categoria: [
    {
      id: 1,
      name: 'Procedimentos operacionais',
    },
  ],
};

describe('formDocumentos component', () => {
  // fit('Should be able to add new documentos', () => {
  //   const wrapper = shallow(<formDocumentos />, { context: { store } });

  //   expect(wrapper.dive().find('Button')).toBe(true);
  // });

  xit('Should be able to add new documentos', () => {
    const wrapper = shallow(<formDocumentos />, { context: { store } });

    wrapper.dive().find('Button').simulate('click');

    expect(store.getActions()).toContainEqual(
      DocumentosActions.postDocumentosRequest(newDocumentos),
    );
    // expect(wrapper.dive().state('documentos')).toHaveLength(1);
  });
});
