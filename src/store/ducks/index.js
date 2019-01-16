import { combineReducers } from 'redux';

import documentos from './documentos';
import departamentos from './departamentos';
import categorias from './categorias';
import error from './error';

export default combineReducers({
  documentos,
  departamentos,
  categorias,
  error,
});
