import { put, select, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

function* codigoExists(codigo, ignore) {
  const documentos = yield select(state => state.documentos.data);
  const exists = documentos.filter((documento) => {
    if (String(ignore) === String(documento.codigo)) return false;
    return documento.codigo === codigo;
  });
  return exists.length > 0;
}

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
  const documento = action.payload.data;

  try {
    const exists = yield call(codigoExists, documento.codigo);

    if (!exists) {
      const documentos = yield select(state => state.documentos.data);
      documentos.push(documento);

      yield call(toastr.success, 'Sucesso', 'Seu documento foi registrado');
      yield put(DocumentosActions.postDocumentosSuccess(documentos));
      yield put(push('/'));
    } else {
      yield call(toastr.error, 'Erro', 'O código informado em em uso');
    }
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel registrar o documento');
  }
}

export function* putDocumentos(action) {
  const documento = action.payload.data;
  const { codigo } = action.payload;

  try {
    const exists = yield call(codigoExists, documento.codigo, codigo);

    if (!exists) {
      const documentos = yield select(state => state.documentos.data);
      const index = documentos.findIndex(element => (element.codigo === codigo ? element : false));
      documentos[index] = documento;

      yield call(toastr.success, 'Sucesso', 'Seu documento foi atualizado');
      yield put(DocumentosActions.putDocumentosSuccess(documentos));
      yield put(push('/'));
    } else {
      yield call(toastr.error, 'Erro', 'O código informado em em uso');
    }
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
