import React from 'react';

import { Switch, Route } from 'react-router-dom';

import List from '~/pages/list';
import Form from '~/pages/form';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={List} />
    <Route path="/form/:id" component={Form} />
    <Route exact path="/form" component={Form} />
  </Switch>
);

export default Routes;
