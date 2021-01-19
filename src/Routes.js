import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';

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
      </Switch>
    </div>
  );
}
