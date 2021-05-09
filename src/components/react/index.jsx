import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";
import { ProductItem } from "./OurProduct/product-item";
import { IntroPage } from "./Introduction/intro-page";
import { Footer } from "./Footer";

const useStyle = makeStyles({
  mainTree: {
    maxWidth: 1400,
    margin: "0 auto",
  },
});

export const Index = () => {
  const style = useStyle();

  return (
    <div class={style.mainTree}>
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
      <Footer />
    </div>
  );
}

