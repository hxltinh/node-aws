import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'; 

const useStyles = makeStyles({
    img: {
        width: '100%',
    }
  });

const items = [
  {
    title: "product 1",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-1.jpg",
  },
  {
    title: "product 2",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-2.jpg",
  },
  {
    title: "product 3",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-3.jpg",
  },
  {
    title: "product 4",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-4.jpg",
  },
];

export const OurProduct = () => {
  return (
    <>
        <p>Our product and this and that</p>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={3}>
            <Item key={item.title} item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

function Item(props) {
    const style = useStyles();
  return (
    <Paper>
      <p>{props.item.title}</p>
      <img className={style.img} src={props.item.imageUrl} />
    </Paper>
  );
}
