import { put, select, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

export function* getDocumentos() {
  try {
    // Aqui ficaria como se fosse feita a request para o servidor
    const documentos = yield select(state => state.documentos.data);

    yield put(DocumentosActions.getDocumentosSuccess(documentos));
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de documentos');
  }
}

export function* postDocumentos(action) {
  try {
    const documentos = yield select(state => state.documentos.data);
    documentos.push(action.payload.data);
    yield call(toastr.success, 'Sucesso', 'Seu documento foi registrado');

    yield put(DocumentosActions.postDocumentosSuccess(documentos));
    yield put(push('/'));
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel registrar o documento');
  }
}

export function* putDocumentos(action) {
  try {
    const documentos = yield select(state => state.documentos.data);
    const documento = action.payload.data;
    const { codigo } = action.payload;

    const index = documentos.findIndex(element => (element.codigo === codigo ? element : false));
    documentos[index] = documento;

    yield call(toastr.success, 'Sucesso', 'Seu documento foi atualizado');
    yield put(DocumentosActions.putDocumentosSuccess(documentos));
    yield put(push('/'));
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel atualizar o documento');
  }
}

export function* deleteDocumentos(action) {
  try {
    const documentos = yield select(state => state.documentos.data);
    const documento = action.payload.data;
    const index = documentos.indexOf(documento);

    documentos.splice(index, 1);

    yield call(toastr.success, 'Sucesso', 'Seu documento foi removido');
    yield put(DocumentosActions.deleteDocumentosSuccess(documentos));
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel remover o documento');
  }
}
