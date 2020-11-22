import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { App } from "../components/react/app";

const router = express.Router();

router.get('/*', async (req, res) => {
    const context = {};
    const sheets = new ServerStyleSheets();

    const reactComp = renderToString(
      sheets.collect(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    );
    const cssString = sheets.toString();
    res.status(200).render('react/index', {reactApp: reactComp, cssString});
})
;

export default router;