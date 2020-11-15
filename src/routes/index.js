import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import { ServerStyleSheets } from '@material-ui/core/styles';
import Index from "../components/react/index";

const router = express.Router();

router.get('/', async (req, res) => {
    const sheets = new ServerStyleSheets();
    const reactComp = renderToString(sheets.collect(<Index/>));
    const cssString = sheets.toString();
    res.status(200).render('react/index', {reactApp: reactComp, cssString});
})
;

export default router;