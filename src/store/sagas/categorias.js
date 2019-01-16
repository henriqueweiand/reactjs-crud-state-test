import { put } from 'redux-saga/effects';

import { Creators as CategoriasActions } from '~/store/ducks/categorias';

export function* getCategorias() {
  try {
    yield put(CategoriasActions.getCategoriasSuccess());
  } catch (err) {
    console.tron.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}
