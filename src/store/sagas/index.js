import { all, takeLatest } from 'redux-saga/effects';

import { Types as DocumentosTypes } from '~/store/ducks/documentos';

import { getDocumentos } from './documentos';

export default function* rootSaga() {
  yield all([
    takeLatest(DocumentosTypes.GET_REQUEST, getDocumentos),
  ]);
}
