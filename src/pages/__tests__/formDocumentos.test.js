import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';
import FormDocumentos from '../formDocumentos';
import { Creators as DocumentosActions } from '~/store/ducks/documentos';

const mockStore = createStore();
const newDocumentos = {
  codigo: '12',
  title: 'Teste pelo Enzyme',
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

describe('FormDocumentos component', () => {
  const INITIAL_STATE = {
    match: {
      params: {},
    },
    documentos: {
      data: [],
    },
  };

  let store;
  let wrapper;

  function hackToFormik() {
    return new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  }

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    wrapper = shallow(<FormDocumentos match={INITIAL_STATE.match} values={newDocumentos} />, {
      context: { store },
    });
  });

  it('Should be able to add a new document', async () => {
    wrapper
      .dive()
      .dive()
      .find('FormDocumentos')
      .dive()
      .find('#btnSave')
      .simulate('click');

    await hackToFormik();
    expect(store.getActions()).toContainEqual(
      DocumentosActions.postDocumentosRequest(newDocumentos),
    );
  });
});
