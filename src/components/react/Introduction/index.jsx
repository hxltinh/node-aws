import React from "react";
import { ImagesSlider } from "../ImagesSlider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  introductionWord: {
    fontSize: 20,
  },
}));

export const Introduction = () => {
  const styles = useStyles();
  return <ImagesSlider />;
};
