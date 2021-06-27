import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CircularProgress,
  Card,
  CardActionArea,
} from "@material-ui/core";
import { SelectMenuContext } from "../TopMenu/select-menu-context-provider";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    minHeight: 320,
  },
  mainImage: {
    height: "auto",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "#ededed",
  },
  titleBar: {
    fontSize: 11,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export const ProductItem = () => {
  const { id } = useParams();

  const [productLine, setProductLine] = useState(undefined);
  const [productList, setProductList] = useState([]);

  const {setSelectedMenu} = useContext(SelectMenuContext);

  useEffect(() => {
    setSelectedMenu('products');
  }, []);

  useEffect(() => {
    fetch(`/api/productLines/${id}`)
      .then((res) => res.json())
      .then(({ productLine: { id, imageUrl, productList } }) => {
        setProductLine({
          id,
          imageUrl,
        });

        setProductList(productList);
      });
  }, []);

  if (!productLine || productList.length === 0) {
    return <CircularProgress />;
  }



  return (
    <ProductItemMainInfo productLine={productLine} productList={productList} />
  );
};

const ProductItemMainInfo = ({ productLine, productList }) => {
  const style = useStyles();

  const [selectedItem, setSelectedItem] = useState(undefined);

  useEffect(() => {
    if (productList.length > 0) {
      setSelectedItem({
        imageUrl: productList[0].imageUrl,
        content: productList[0].content,
      });
    }
  }, []);

  if (!selectedItem) {
    return <></>;
  }

  const imageClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="gb-padding">
      <div className={style.root}>
        <div>{selectedItem.content}</div>
        <div className={style.mainImage}>
          <img src={selectedItem.imageUrl} />
        </div>
      </div>
      <Grid container spacing={3}>
        {productList && productList.map((i) => <Item item={i} imageClick={imageClick} />)}
      </Grid>
    </div>
  );
};

const Item = ({ item, imageClick }) =>(<Grid item xs={3}>
  <Card>
    <CardContent>
      <Typography variant="body2">{item.title}</Typography>
    </CardContent>
    <CardMedia image={item.imageUrl} title={item.title} />
    <CardActionArea onClick={() => imageClick(item)}>
      <img src={item.imageUrl} />
    </CardActionArea>
  </Card>
</Grid>);
