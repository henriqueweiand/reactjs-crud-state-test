import { put } from 'redux-saga/effects';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

export function* getDocumentos() {
  try {
    yield put(DocumentosActions.getDocumentosSuccess());
  } catch (err) {
    console.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}

export function* postDocumentos(action) {
  try {
    yield put(DocumentosActions.postDocumentosSuccess(action.payload.data));
  } catch (err) {
    console.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}

export function* putDocumentos(action) {
  try {
    yield put(DocumentosActions.putDocumentosSuccess(action.payload.data));
    console.log(action);
  } catch (err) {
    console.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}

export function* deleteDocumentos(action) {
  try {
    yield put(DocumentosActions.deleteDocumentosSuccess(action.payload.data));
    console.log(action);
  } catch (err) {
    console.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}
