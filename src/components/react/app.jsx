import React from "react";
import { makeStyles } from "@material-ui/core";
import { Redirect, Route } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";
import { IntroPage } from "./Introduction/intro-page";
import { ProductIntro } from "./OurProduct/product-intro";
import { ProductItem } from "./OurProduct/product-item";
import { Footer } from "./Footer";

const useStyle = makeStyles({
  mainTree: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: "100%",
    justifyContent: "space-between",
  },
});

export const App = () => {
  const style = useStyle();

  return (
    <div className={style.mainTree}>
      <main>
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

        <Route path="/products">
          <ProductIntro />
        </Route>

        <Route path="/product/:id">
          <ProductItem />
        </Route>

        <Route path="/introduction">
          <IntroPage />
        </Route>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
