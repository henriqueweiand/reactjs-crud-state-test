import { put, select, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import _ from 'lodash';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

function* sort() {
  const documentos = yield select(state => state.documentos.data);
  const newOrder = _.sortBy(documentos, 'title');

  return newOrder;
}

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
    const documentos = yield call(sort);

    yield put(DocumentosActions.getDocumentosSuccess(documentos));
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel obter a lista de documentos');
  }
}

export function* postDocumentos(action) {
  try {
    const documento = action.payload.data;
    const exists = yield call(codigoExists, documento.codigo);

    if (!exists) {
      // chama API para salvar nos servidor

      yield call(toastr.success, 'Sucesso', 'Seu documento foi registrado');
      yield put(DocumentosActions.postDocumentosSuccess(documento));
      yield put(push('/'));
    } else {
      yield call(toastr.error, 'Erro', 'O código informado em em uso');
    }
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel registrar o documento');
  }
}

export function* putDocumentos(action) {
  try {
    const documento = action.payload.data;
    const { codigo } = action.payload;
    const exists = yield call(codigoExists, documento.codigo, codigo);

    if (!exists) {
      // chama API para atualizar nos servidor

      yield call(toastr.success, 'Sucesso', 'Seu documento foi atualizado');
      yield put(DocumentosActions.putDocumentosSuccess(documento, codigo));
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
    const documento = action.payload.data;
    // chama API para deletar nos servidor

    yield call(toastr.success, 'Sucesso', 'Seu documento foi removido');
    yield put(DocumentosActions.deleteDocumentosSuccess(documento.codigo));
  } catch (err) {
    yield call(toastr.error, 'Erro', 'Não foi possivel remover o documento');
  }
}
