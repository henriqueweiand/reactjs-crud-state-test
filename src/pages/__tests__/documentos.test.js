import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import createStore from 'redux-mock-store';
import Documentos from '../documentos';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

const mockStore = createStore();

describe('Documentos component', () => {
  const INITIAL_STATE = {
    loading: false,
    documentos: {
      data: [
        {
          codigo: '1',
          title: 'Documento teste 1',
          departamento: [],
          categoria: [],
          date: '2019-01-01',
        },
      ],
    },
  };

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    wrapper = shallow(
      <MemoryRouter>
        <Documentos />
      </MemoryRouter>,
      { context: { store } },
    );
  });

  it('Should be able to render', () => {
    expect(wrapper.find(Documentos).length).toEqual(1);
  });

  it('Check Prop matches with initialState', () => {
    expect(store.getState()).toEqual(INITIAL_STATE);
  });

  fit('Should be able to remove a document', () => {
    const { documentos: { data } } = INITIAL_STATE;

    store.dispatch(DocumentosActions.deleteDocumentosSuccess(data[0].codigo));

    expect(store.getActions()).toContainEqual(
      DocumentosActions.deleteDocumentosSuccess(data[0].codigo),
    );
  });
});
