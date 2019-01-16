import { put } from 'redux-saga/effects';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

export function* getDocumentos() {
  try {
    yield put(DocumentosActions.getDocumentosSuccess({ id: Math.random(), name: 'teste' }));
    yield put(DocumentosActions.getDocumentosSuccess({ id: Math.random(), name: 'teste' }));
  } catch (err) {
    console.tron.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}
