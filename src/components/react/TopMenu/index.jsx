import React, {useState, useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { SelectMenuContext } from "./select-menu-context-provider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    width: 220,
  },
  fullMenuWrapper: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    maxWidth: 1000,
  },
  linkWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  linkContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    maxWidth: 700,
  },
  linkItem: {
    textDecoration: "none",
    fontSize: "1.2rem",
    color: "rgb(51, 153, 255)",
    padding: "6px 10px",
    borderRadius: 12,
    "&:hover": {
      backgroundColor: "rgb(51, 153, 255)",
      color: "rgb(255, 255, 255)",
    },
  },
  hightlight: {
    borderBottom: '1px solid blue',
  }
}));

export const TopMenu = () => {
  const classes = useStyles();

  const {selectedMenu,setSelectedMenu} = useContext(SelectMenuContext);

  const resolveHighLightClassNames = (itemNameShouldMatch) => {
    return itemNameShouldMatch === selectedMenu ? `${classes.linkItem} ${classes.hightlight}` : classes.linkItem;
  }

  return (
    <div className={classes.root}>
      <div className={classes.fullMenuWrapper}>
        <div className={classes.logoWrapper}>
          <Logo />
        </div>
        <div className={classes.linkWrapper}>
          <div className={classes.linkContainer}>
            <Link to="/" onClick={() => setSelectedMenu('home')} className={resolveHighLightClassNames('home')}>
              Home
            </Link>
            <Link to="/introduction" onClick={() => setSelectedMenu('introduction')} className={resolveHighLightClassNames('introduction')}>
              Introduction
            </Link>
            <Link to="/products" onClick={() => setSelectedMenu('products')} className={resolveHighLightClassNames('products')}>
              Our Products
            </Link>
            <Link to="/facilities" onClick={() => setSelectedMenu('facilities')} className={resolveHighLightClassNames('facilities')}>
              Facilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
