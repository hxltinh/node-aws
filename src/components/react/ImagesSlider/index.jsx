import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, rgbToHex } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  page: {
    position: 'relative',
    height: 'auto',
    overflow: 'hidden',
    maxWidth: 1400,
    width: '100%',
  },
  img: {
    width: '100%',
  },
  content: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '1.5rem',
    backgroundColor: 'rgb(0, 0, 0, 0.5)'

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
  const style = useStyles();

  return (
    <div className={style.page}>
      <img className={style.img} src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/image-2.jpg" />
      <div className={style.content} ><p>We give "Diamond Grade" <br/> commitment of quality</p></div>
    </div>
    // <Carousel>
    //   {items.map((item, i) => (
    //     <Item key={i} item={item} />
    //   ))}
    // </Carousel>
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
