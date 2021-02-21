import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ContentTitle } from "../ContentTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  imgWrapper: {
    position: "relative",
  },
  img: {
    width: "100%",
  },
  btnWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
  },
}));


export const FacilitiesShortIntro = () => {
  const style = useStyles();
  const history = useHistory();

  return (
    <div className={style.root}>
      <ContentTitle>Facilities</ContentTitle>
      <div className={style.imgWrapper}>
        <img
          className={style.img}
          src="https://nguyet-public-entities.s3-ap-southeast-1.amazonaws.com/factory-wide.jpg"
        />
        <div className={style.btnWrapper}>
        <Button className={style.imgButton} variant="contained" color="primary" onClick={() => history.push("/facilities")}>
          More info
        </Button>
        </div>
      </div>
    </div>
  );
};
