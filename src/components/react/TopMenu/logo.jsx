import React from "react";
import { Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '1.3rem',
  },
  img: {
    width: '80px',
  }
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="http://diamondrice.vn" className={classes.logo}>
        <img className={classes.img}
          src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/rice_logo.png"
          alt="logo"
        />
        <div>DiamondRice</div>
      </Link>
    </div>
  );
};
