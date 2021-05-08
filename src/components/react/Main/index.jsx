import { makeStyles } from "@material-ui/core";
import React from "react";

import { FacilitiesShortIntro } from '../Facilities';
import { Footer } from "../Footer";
import { Introduction } from "../Introduction";
import { OurProduct } from "../OurProduct";

const useStyle = makeStyles({
    mainTree: {
        maxWidth: 1400,
        margin: '0 auto',
    }
});

export const Main = () => {
    const style = useStyle();
    return (
        <>
        <div class={style.mainTree}>
            <Introduction />
            <OurProduct />
            <FacilitiesShortIntro />
            
        </div>
        <Footer />
        </>
    );
}
