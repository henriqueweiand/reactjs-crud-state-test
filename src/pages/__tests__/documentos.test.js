import React from 'react';
import { shallow } from 'enzyme';
import Documentos from '../documentos';
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

describe('Documentos component', () => {
  fit('Should be able to remove documentos', () => {
    const wrapper = shallow(<Documentos />, { context: { store } }).dive();

    // wrapper
    //   .dive()
    //   .find('FaTrash')
    //   .first()
    //   .simulate('click');
    console.log(
      wrapper.html(),
    );
    // expect(store.getActions()).toContainEqual(
    //   DocumentosActions.deleteDocumentosRequest(INITIAL_STATE.documentos[0].codigo),
    // );
  });
});
