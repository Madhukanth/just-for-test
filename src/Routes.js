import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Timeline from './components/Timeline';
import Video from './components/Video';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Timeline} exact />
      <Route path="/video" component={Video} exact />
    </Switch>
  </BrowserRouter>
);
export default Routes;
