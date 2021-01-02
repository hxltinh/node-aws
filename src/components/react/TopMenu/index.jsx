import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

// should link to RICE MILLING FACILITIES, INTERNATIONAL MARKET,  AWARDS AND CERTIFICATIOS

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  logoWrapper: {
    width: 60,
    height: 60,
  },
  fullMenuWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  linkWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingRight: 20,
  },
  linkContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    maxWidth: 700,
  },
  linkItem: {
    textDecoration: "none",
    fontSize: '1.2rem',
    color: 'grey'
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
      <Grid container spacing={3}>
        <Hidden xsDown>
          <Grid item xs={12} className={classes.fullMenuWrapper}>
            <div className={classes.logoWrapper}>
              <Logo />
            </div>
            <div className={classes.linkWrapper}>
              <div className={classes.linkContainer}>
                <Link to="/introduction" className={classes.linkItem}>
                  Introduction
                </Link>
                <Link to="/our-products" className={classes.linkItem}>
                  Our Products
                </Link>
                <Link to="/facilities" className={classes.linkItem}>
                  Facilities
                </Link>
              </div>
            </div>
          </Grid>
        </Hidden>

        <Hidden xsUp>
          <Grid item xs={12}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Introduction</MenuItem>
              <MenuItem onClick={handleClose}>My Products</MenuItem>
              <MenuItem onClick={handleClose}>Facilities</MenuItem>
            </Menu>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
