import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  page: {
    height: 600,
  },
  img: {
  },
});

const items = [
  {
    name: "image 1",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/image-1.jpg",
  },
  {
    name: "image 2",
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/image-2.jpg",
  },
];

export const ImagesSlider = (props) => {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  const style = useStyles();
  return (
    <Paper className={style.page}>
      <img className={style.img} src={props.item.imageUrl} />
    </Paper>
  );
}
