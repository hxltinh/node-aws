import React from "react";
import { useParams } from "react-router-dom";

export const ProductItem = () => {
    const { id } = useParams();

    console.log('id', id);
    return (<div>product item</div>);
}