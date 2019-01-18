import documentos, { Creators as DocumentosActions } from '../documentos';

const newDocumentos = {
  codigo: 12,
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

const INITIAL_STATE = {
  data: [
    {
      ...newDocumentos,
      codigo: 'ab',
      title: 'Valor que ja estava na lista',
    },
  ],
  loading: false,
};

describe('Documentos Reducer', () => {
  it('should be able to return a documentos', () => {
    const state = documentos(INITIAL_STATE, DocumentosActions.getDocumentosRequest());

    expect(state.data).toHaveLength(1);
  });

  it('should be able to add new documento', () => {
    const state = documentos(INITIAL_STATE, DocumentosActions.postDocumentosSuccess(newDocumentos));

    expect(state.data[1].title).toBe('Teste pelo Enzyme');
  });

  it('should be able to remove documento', () => {
    const state = documentos(INITIAL_STATE, DocumentosActions.deleteDocumentosSuccess(1));

    expect(state.data.length).toBe(1);
  });

  it('should be able to update documento', () => {
    const state = documentos(INITIAL_STATE, DocumentosActions.putDocumentosSuccess(
      {
        ...newDocumentos,
        codigo: 22,
        title: 'Atualizado',
      },
      'ab',
    ));

    expect(state.data[0].title).toBe('Atualizado');
  });
});
