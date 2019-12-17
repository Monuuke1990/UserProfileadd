import React from "react";
import { Router ,Switch, Route } from "react-router-dom";

import Addremove from './addRemove';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


const Main = () => (
  <main>
      <Router history={history}>
    <Switch>
      <Addremove/>
          </Switch>
           </Router>
  </main>
);

export default Main;