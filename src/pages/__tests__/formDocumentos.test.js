import React from 'react';
import { mount, shallow, render } from 'enzyme';
import createStore from 'redux-mock-store';
import FormDocumentos from '../FormDocumentos';
import { Provider } from 'react-redux';
import documentos, { Creators as DocumentosActions } from '~/store/ducks/documentos';

const mockStore = createStore();
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

describe('FormDocumentos component', () => {
  const INITIAL_STATE = {
    values: newDocumentos,
    match: {
      params: {},
    },
    documentos: {
      data: [],
    },
    departamentos: {
      loading: false,
      data: [
        {
          id: 1,
          name: 'Desenvolvimento',
        },
        {
          id: 2,
          name: 'Comercial',
        },
        {
          id: 3,
          name: 'Suporte',
        },
      ],
    },
    categorias: {
      loading: false,
      data: [
        {
          id: 1,
          name: 'Procedimentos operacionais',
        },
        {
          id: 2,
          name: 'Formulários padrões',
        },
        {
          id: 3,
          name: 'Planejamento de processo',
        },
      ],
    },
  };

  let store;
  let wrapper;

  fit('teste', () => {
    store = mockStore(INITIAL_STATE);
    wrapper = shallow(
      <FormDocumentos
        match={INITIAL_STATE.match}
        values={newDocumentos}
      />,
      { context: { store } },
    );

    const render = wrapper.dive().dive();

    const teste = render.find('button');
    console.log(teste);

    // expect(store.getActions()).toContainEqual(
    //   DocumentosActions.postDocumentosSuccess(newDocumentos),
    // );


    // wrapper.find('form').instance().props.handleSubmit(newDocumentos, { resetForm });
  });

  // it('Should be able to add new document', () => {
  //   store.dispatch(DocumentosActions.postDocumentosSuccess(newDocumentos));

  //   const { documentos: { data } } = store.getState();

  //   expect(data).toEqual(1);
  // });
});
