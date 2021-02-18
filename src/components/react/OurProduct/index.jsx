import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: "100%",
  },
  titleWrapper: {
    display: 'flex',
    margin: '15px 0', 
    justifyContent: 'center',
  },
  titleText: {
    fontSize: '2.875rem',
    color: 'rgb(51, 153, 255)',
    padding: '10px 20px',
    borderBottom: '1px solid grey',
  },
  oemManufactoring: {
    display: 'flex',
    flexDirection: 'row',
  },
  oemTitle: {
    width: 260,
    fontSize: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  oemImage: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    
  },
  productItem: {
    position: 'relative',
  },
  productItemTitleWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  productItemTitle: {
    position: 'relative',
    padding: '5px 14px',
    backgroundColor: 'rgb(255, 255, 255, 0.5)',
    textAlign: 'center',
  },

}));

export const OurProduct = () => {
  const [products, setProducts] = useState([]);
  const style = useStyles();

  useEffect(() => {
    fetch("/api/products", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div class="gb-padding">
      <Grid container spacing={3} className={style.root}>
        <div className={style.titleWrapper}>
          <div className={style.titleText}>Our Products</div>
        </div>
        <div className={style.oemManufactoring}>
          <div className={style.oemTitle}><div>OEM manufacturing</div></div>
          <div className={style.oemImage}><img src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/oem-menufactoring.png"></img></div>
        </div>
        <div>
          <ProductsList products={products} />
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
