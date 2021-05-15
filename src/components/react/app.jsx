import React from "react";
import { makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";

import { TopMenu } from "./TopMenu";
import { Main } from "./Main";
import { Facilities } from "./Facilities";
import { IntroPage } from "./Introduction/intro-page";

const useStyle = makeStyles({
  mainTree: {
    maxWidth: 1400,
    margin: "0 auto",
  },
});

export const App = () => {
  const style = useStyle();

  return (
    <div className={style.mainTree}>
      <TopMenu />
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/facilities">
        <Facilities />
      </Route>
      <Route path="/introduction">
        <IntroPage />
      </Route>
    </div>
  );
};
