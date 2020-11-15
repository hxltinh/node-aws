import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

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
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <img src={props.item.imageUrl} />
    </Paper>
  );
}
