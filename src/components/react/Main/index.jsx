import React from "react";

import { FacilitiesShortIntro } from '../Facilities';
import { Introduction } from "../Introduction";
import { OurProduct } from "../OurProduct";

export const Main = () => {

    return (
        <>
            <Introduction />
            <OurProduct />
            <FacilitiesShortIntro />
        </>    
    );
}
