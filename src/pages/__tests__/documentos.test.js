import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Documentos from '../documentos';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

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

  const mockStore = configureStore();

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}><Documentos /></Provider>
      </MemoryRouter>,
    );
  });

  it('Should be able to render', () => {
    expect(wrapper.find(Documentos).length).toEqual(1);
  });

  it('Check Prop matches with initialState', () => {
    expect(store.getState()).toEqual(INITIAL_STATE);
  });

  it('Should be able to render a list', () => {
    const { documentos: { data } } = INITIAL_STATE;

    store.dispatch(DocumentosActions.getDocumentosSuccess(data));
    expect(wrapper.find('.documentosItem').length).toEqual(1);
  });
});
