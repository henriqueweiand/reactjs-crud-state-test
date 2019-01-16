import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Documentos from '~/pages/documentos';
import formDocumentos from '~/pages/formDocumentos';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Documentos} />
    <Route exact path="/documentos/create" component={formDocumentos} />
    <Route path="/documentos/:id" component={formDocumentos} />
  </Switch>
);

export default Routes;
