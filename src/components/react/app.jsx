import React, { useState, createContext } from "react";
import { makeStyles } from "@material-ui/core";
import { Redirect, Route } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";
import { IntroPage } from "./Introduction/intro-page";
import { ProductIntro } from "./OurProduct/product-intro";
import { ProductLine } from "./OurProduct/product-line";
import { Footer } from "./Footer";
import { CreateContextProvider } from "./TopMenu/select-menu-context-provider";


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
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
  },
});



export const App = () => {
  const styles = useStyle();


  return (
    <div className={styles.mainTree}>
      <main className={styles.main}>
        <CreateContextProvider>
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
            <ProductLine />
          </Route>

          <Route path="/introduction">
            <IntroPage />
          </Route>
        </CreateContextProvider>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
