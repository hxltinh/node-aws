import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
}));

export const OurProduct = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products', {
      method: 'POST'
    }).then(res => res.json())
      .then(result => setProducts(result));
  }, []);

  return (
    <div className="gb-padding">
      <p>Our product and this and that</p>
      <Grid container spacing={3}>
        <ProductsList products={products} />
      </Grid>
    </div>
  );
};

function ProductsList({ products }) {
  if (products.length === 0) {
    return <div>Loading</div>
  }

  return products.map((item) => (
    <Grid item xs={3}>
      <Item key={item.name} item={item} />
    </Grid>
  ))
}

function Item({item}) {
  const style = useStyles();

  const linkTo = `/product/${item.name}`;
  return (
    <Paper>
      <Link to={linkTo}>
        <p>{item.title}</p>
        <img className={style.img} src={item.imageUrl} />
      </Link>
    </Paper>
  );
}
