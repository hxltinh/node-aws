import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
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
          <Grid item xs={4}>
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
    <Card>
      <CardActionArea>
        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={item.imageUrl}
            title="Contemplative Reptile"
          />
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          {item.contents.map(content => {
            return (
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            )
          })}
        </CardContent>
    </Card>
  );
}

const items = [
  {
    title: "Line 01",
    contents: ['Paddy Husker x 7', 'Paddy Separator x 5', ' Paddy Dryer x 5'],
    imageUrl:
      "https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_1.jpg",
  },
  {
    title: "Line 03",
    contents: ['Paddy Husker x 3', 'Paddy Separator x 2', ' Paddy Dryer x 2'],
    imageUrl:
      "https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_2.jpg",
  },
  {
    title: "Line 03",
    contents: ['Paddy Husker x 6', 'Paddy Separator x 6', ' Paddy Dryer x 6'],
    imageUrl:
      "https://nguyet-public-entities.s3.ap-southeast-1.amazonaws.com/factory_3.jpg",
  },

];
