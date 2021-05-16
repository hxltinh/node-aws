import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrbow: 1,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
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
}));

export const TopMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fullMenuWrapper}>
        <div className={classes.logoWrapper}>
          <Logo />
        </div>
        <div className={classes.linkWrapper}>
          <div className={classes.linkContainer}>
            <Link to="/" className={classes.linkItem}>
              Home
            </Link>
            <Link to="/introduction" className={classes.linkItem}>
              Introduction
            </Link>
            <Link to="/products" className={classes.linkItem}>
              Our Products
            </Link>
            <Link to="/facilities" className={classes.linkItem}>
              Facilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
