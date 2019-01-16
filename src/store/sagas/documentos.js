import { put } from 'redux-saga/effects';

import { Creators as DocumentosActions } from '~/store/ducks/documentos';

export function* getDocumentos() {
  try {
    yield put(DocumentosActions.getDocumentosSuccess());
  } catch (err) {
    console.tron.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}

export function* putDocumentos(action) {
  console.tron.log(action);
  // const agenda = {
  //   ...agendaModel,
  //   ...action.payload,
  // };

  // try {
  //   yield put(AgendaActions.putModalStatus(false));
  //   yield call(
  //     reduxSagaFirebase.firestore.updateDocument,
  //     `${channelName}/${action.payload.id}`,
  //     agenda,
  //   );
  //   yield put(SnackBarActions.setMessage('success', 'Atualizado com sucesso.'));
  //   yield put(AgendaActions.putAgendaRequestSuccess());
  // } catch (err) {
  //   yield put(AgendaActions.requestError());
  //   yield put(SnackBarActions.setMessage('error', 'Não foi possivel atualizar.'));
  // }
}

export function deleteDocumentos(action) {
  console.tron.log(action);
  // try {
  //   yield put(AgendaActions.putModalStatus(false));
  //   yield call(reduxSagaFirebase.firestore.deleteDocument, `${channelName}/${action.payload.id}`);
  //   yield put(SnackBarActions.setMessage('success', 'Deletado com sucesso.'));
  //   yield put(AgendaActions.deleteAgendaRequestSuccess());
  // } catch (err) {
  //   yield put(AgendaActions.requestError());
  //   yield put(SnackBarActions.setMessage('error', 'Não foi possivel deletar.'));
  // }
}
