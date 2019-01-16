import { put } from 'redux-saga/effects';

import { Creators as DepartamentosActions } from '~/store/ducks/departamentos';

export function* getDepartamentos() {
  try {
    yield put(DepartamentosActions.getDepartamentosSuccess());
  } catch (err) {
    console.tron.log(err);
    // yield put(ErrorsActions.setError('danger', 'Não foi possível obter suas playlists.'));
  }
}
