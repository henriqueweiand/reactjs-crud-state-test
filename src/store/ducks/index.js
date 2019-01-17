import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';

import documentos from './documentos';
import departamentos from './departamentos';
import categorias from './categorias';

export default history => combineReducers({
  documentos,
  departamentos,
  categorias,
  toastr: toastrReducer,
  router: connectRouter(history),
});
