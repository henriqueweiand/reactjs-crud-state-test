import { all, takeLatest } from 'redux-saga/effects';

import { Types as DocumentosTypes } from '~/store/ducks/documentos';
import { Types as CategoriasTypes } from '~/store/ducks/categorias';
import { Types as DepartamentosTypes } from '~/store/ducks/departamentos';

import {
  getDocumentos, postDocumentos, deleteDocumentos, putDocumentos,
} from './documentos';
import { getCategorias } from './categorias';
import { getDepartamentos } from './departamentos';

export default function* rootSaga() {
  yield all([
    takeLatest(DocumentosTypes.GET_REQUEST, getDocumentos),
    takeLatest(DocumentosTypes.POST_REQUEST, postDocumentos),
    takeLatest(DocumentosTypes.PUT_REQUEST, putDocumentos),
    takeLatest(DocumentosTypes.DELETE_REQUEST, deleteDocumentos),
    takeLatest(CategoriasTypes.GET_REQUEST, getCategorias),
    takeLatest(DepartamentosTypes.GET_REQUEST, getDepartamentos),
  ]);
}
