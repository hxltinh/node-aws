import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
}));

export const Facilities = () => {
  return (
    <div className="gb-padding">
      <p>Introduction: Our factories are the best</p>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={3}>
            <Item key={item.title} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

function Item({ item }) {
  const style = useStyles();
  return (
    <Paper>
      <p>{item.title}</p>
      <div>{item.content}</div>
      <img className={style.img} src={item.imageUrl} />
    </Paper>
  );
}

const items = [
  {
    title: "factory 1",
    content: "content 1",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-1.jpg",
  },
  {
    title: "factory 2",
    content: "content 2",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-2.jpg",
  },
  {
    title: "factory 3",
    content: "content 3",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-3.jpg",
  },
  {
    title: "factory 4",
    content: "content 4",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-4.jpg",
  },
];
