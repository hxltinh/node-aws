import React from "react";
import { Route } from "react-router-dom"

import { TopMenu } from "./TopMenu";
import { Main } from './Main';
import { Facilities } from './Facilities'

export const App = () => (
  <>
    <TopMenu />
    <Route path="/main">
      <Main />
    </Route>
    <Route path="/facilities">
      <Facilities />
    </Route>
  </>
);