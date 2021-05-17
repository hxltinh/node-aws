import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";
import { ProductItem } from "./OurProduct/product-item";
import { IntroPage } from "./Introduction/intro-page";
import { Footer } from "./Footer";
import { ProductIntro } from "./OurProduct/product-intro";

const useStyle = makeStyles({
  mainTree: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: "100%",
    justifyContent: "space-between",
  },
  main: {
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
  },
  menu: {
    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',
  }
});

export const Index = () => {
  const styles = useStyle();

  return (
    <div className={styles.mainTree}>
      <main className={styles.main}>
        <BrowserRouter>
          <div className={styles.menu}>
            <TopMenu />
          </div>
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
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
