import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/Notfound';
import SignIn from './Pages/SignIn';

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
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
