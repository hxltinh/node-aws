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
      <p>Introduction: Our priority at the production level is to clean and improve the physical appearance of the raw material with our well-developed technology. TKR boasts state-of art computerized facilities, which is continuously invests in the most advance technology to improve its operations, enhance product quality, and increase production efficiency. Our machines focus on removing all extraneous materials such as weed, dust, rock paddy rice and substandard grains and other foreign particle are separated through our high-technology color sorter, for final upgrading before transfer to packing process and the final product is completely manufactured.</p>
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
      <ul>
      {item.contents.map(content => <li>{content}</li>)}
      </ul>
      <img className={style.img} src={item.imageUrl} />
    </Paper>
  );
}

const items = [
  {
    title: "factory 1",
    contents: ['Paddy Husker x 7', 'Paddy Separator x 5', ' Paddy Dryer x 5'],
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-1.jpg",
  },
  {
    title: "factory 2",
    contents: ['Paddy Husker x 7', 'Paddy Separator x 5', ' Paddy Dryer x 5'],
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-2.jpg",
  },
  {
    title: "factory 3",
    contents: ['Paddy Husker x 7', 'Paddy Separator x 5', ' Paddy Dryer x 5'],
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-3.jpg",
  },
  {
    title: "factory 4",
    contents: ['Paddy Husker x 7', 'Paddy Separator x 5', ' Paddy Dryer x 5'],
    imageUrl:
      "https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/thump-image-4.jpg",
  },
];
