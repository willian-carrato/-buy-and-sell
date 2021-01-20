import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/Notfound';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
