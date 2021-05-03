import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";
import { ProductItem } from "./OurProduct/product-item";
import { IntroPage } from "./Introduction/intro-page";

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

        <Route path="/product/:id">
          <ProductItem />
        </Route>

        <Route path="/introduction">
          <IntroPage />
        </Route>
      </BrowserRouter>
    );
  }
}
export default Index;
