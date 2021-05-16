import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  CircularProgress,
  Card,
  CardActionArea,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    minHeight: 320,
  },
  mainImage: {
    height: 'auto',
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

  if (!productLine) {
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
    setSelectedItem({
      imageUrl: productLine.imageUrl,
      content: "we provide the best quality product with a fair price",
    });
  }, []);

  if (!selectedItem) {
    return <></>;
  }

  const imageClick = (item) => {
    setSelectedItem(item);
  }

  return (
    <div className="gb-padding">
      <div className={style.root}>
        <div>{selectedItem.content}</div>
        <div className={style.mainImage}>
          <img src={selectedItem.imageUrl} />
        </div>
      </div>
      <GridList className={style.gridList} cols={2.5}>
        {productList &&
          productList.map((i) => (
            <GridListTile key={i.id}>
              <Card>
                <CardActionArea onClick={() => imageClick(i)}>
                <img src={i.imageUrl} />
                </CardActionArea>
                <GridListTileBar
                  title={i.title}
                  classes={{
                    root: style.titleBar,
                    title: style.title,
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${i.title}`}>
                      <StarBorderIcon className={style.title} />
                    </IconButton>
                  }
                />
                
              </Card>
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};
