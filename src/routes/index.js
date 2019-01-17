import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Documentos from '~/pages/documentos';
import formDocumentos from '~/pages/formDocumentos';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Documentos} />
      <Route exact path="/documentos/create" component={formDocumentos} />
      <Route path="/documentos/:codigo" component={formDocumentos} />
      <Route component={Documentos} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
