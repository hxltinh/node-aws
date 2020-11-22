import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <TopMenu />
        <Route path="/main">
          <Main />
        </Route>

        <Route path="/facilities">
          <Facilities />
        </Route>

        <Route path="/" exact={true}>
          <Redirect to={{ pathname: "/main" }} />
        </Route>
      </BrowserRouter>
    );
  }
}
export default Index;
