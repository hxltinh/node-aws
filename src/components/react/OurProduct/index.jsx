import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { ContentTitle } from "../ContentTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "100%",
  },
  oemManufactoring: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  oemManufactoringWrapper: {
    maxWidth: 1000,
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  oemTitle: {
    width: 260,
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  oemImage: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  productItem: {
    position: "relative",
  },
  productItemTitleWrapper: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
  },
  productItemTitle: {
    position: "relative",
    padding: "5px 14px",
    backgroundColor: "rgb(255, 255, 255, 0.5)",
    textAlign: "center",
    color: "#000000",
  },
}));

export const OurProduct = () => {
  const [productLines, setProductLines] = useState([]);
  const style = useStyles();

  useEffect(() => {
    fetch("/api/productLines", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setProductLines(result));
  }, []);

  return (
    <div className="gb-padding">
      <Grid container spacing={3} className={style.root}>
        <ContentTitle>Our Products</ContentTitle>
        <div className={style.oemManufactoring}>
          <div className={style.oemManufactoringWrapper}>
            <div className={style.oemTitle}>
              <div>OEM manufacturing</div>
            </div>
            <div className={style.oemImage}>
              <img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/oem-menufactoring.png"></img>
            </div>
          </div>
        </div>
        <div>
          <ProductsList products={productLines} />
        </div>
      </Grid>
    </div>
  );
};

function ProductsList({ products }) {
  if (products.length === 0) {
    return <div>Loading</div>;
  }

  const items = products.map((item) => (
    <Grid item xs={3}>
      <Item key={item.id} item={item} />
    </Grid>
  ));
  return (
    <Grid container spacing={3}>
      {items}
    </Grid>
  );
}

function Item({ item }) {
  const style = useStyles();

  const linkTo = `/product/${item.id}`;
  return (
    <Paper>
      <Link to={linkTo} className={style.productItem}>
        <div className={style.productItemTitleWrapper}>
          <div className={style.productItemTitle}>{item.title}</div>
        </div>
        <img className={style.img} src={item.imageUrl} />
      </Link>
    </Paper>
  );
}
