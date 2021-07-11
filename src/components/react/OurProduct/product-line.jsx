import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
    CircularProgress,
} from "@material-ui/core";
import { SelectMenuContext } from "../TopMenu/select-menu-context-provider";
import { ProductItemList } from "./product-item-list";

export const ProductLine = () => {
    const { id } = useParams();

    const [productList, setProductList] = useState([]);

    const { setSelectedMenu } = useContext(SelectMenuContext);

    useEffect(() => {
        setSelectedMenu("products");
    }, []);

    useEffect(() => {
        fetch(`/api/productLines/${id}`)
            .then((res) => res.json())
            .then(({ productLine: { id, imageUrl, productList } }) => {
                setProductList(productList);
            });
    }, []);

    if (productList.length === 0) {
        return <CircularProgress />;
    }

    return (
        <ProductItemList
            productList={productList}
        />
    );
};
