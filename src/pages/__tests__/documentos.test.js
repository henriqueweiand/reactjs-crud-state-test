import React from 'react';
import { shallow } from 'enzyme';
import formDocumentos from '../documentos';
import createMockStore from 'redux-mock-store';

import { Creators as DocumentosActions } from '~/store/ducks/departamentos';

const INITIAL_STATE = {
  documentos: {
    data: [
      {
        codigo: 'aa',
        title: 'Title 1',
        date: '2019-01-17',
        departamento: [
          {
            id: 1,
            name: 'Desenvolvimento',
          },
          {
            id: 2,
            name: 'Comercial',
          },
        ],
        categoria: [
          {
            id: 1,
            name: 'Procedimentos operacionais',
          },
        ],
      },
      {
        codigo: '22',
        title: 'Title 2',
        date: '2019-01-18',
        departamento: [
          {
            id: 2,
            name: 'Comercial',
          },
        ],
        categoria: [
          {
            id: 1,
            name: 'Procedimentos operacionais',
          },
        ],
      },
    ],
  },
};

const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE);

describe('formDocumentos component', () => {
  xit('Should be able to remove documentos', () => {
    const wrapper = shallow(<formDocumentos />, { context: { store } });

    wrapper
      .dive()
      .find('FaTrash')
      .first()
      .simulate('click');

    expect(store.getActions()).toContainEqual(
      DocumentosActions.deleteDocumentosRequest(INITIAL_STATE.documentos[0].codigo),
    );
  });
});
