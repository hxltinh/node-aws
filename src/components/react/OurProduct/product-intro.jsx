import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import {
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Grid,
  Link,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
    item: {
        padding: '0 10px', 
    },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

export const ProductIntro = () => {
  const style = useStyles();

  const [productLines, setProductLines] = useState(undefined);

  useEffect(() => {
    fetch("/api/productLines")
      .then((res) => res.json())
      .then((items) => {
        setProductLines(items);
      });
  }, []);

  if (!productLines) {
    return <CircularProgress />;
  }
  return (
    <div className="gb-padding">
      <Grid container spacing={3} className={style.root}>
        <ProductLines items={productLines} />
      </Grid>
    </div>
  );
};

const ProductLines = ({ items }) =>
  items.map((item) => {
    const classes = useStyles();

    return (
      <Grid item xs={3}>
        <Card className={classes.item}>
          <CardContent>
            <Typography variant="body2" >
              {item.title}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={item.imageUrl}
            title={item.title}
          />
          <CardActions>
            <Link href={`/product/${item.id}`}>Learn More</Link>
          </CardActions>
        </Card>
      </Grid>
    );
  });
