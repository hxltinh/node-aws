import React from "react";
import { Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80px',
  },
  img: {
    width: '100%',
  }
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="http://diamondrice.vn">
        <img className={classes.img}
          src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/rice_logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};
