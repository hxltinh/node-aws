import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  titleWrapper: {
    display: "flex",
    margin: "40px 0 20px 0",
    justifyContent: "center",
  },
  titleText: {
    fontSize: "2.875rem",
    color: "rgb(51, 153, 255)",
    padding: "10px 20px",
    borderBottom: "1px solid #a9a9a9",
  },
}));

export const ContentTitle = ({ children }) => {
  const style = useStyles();

  return (
    <div className={style.titleWrapper}>
      <div className={style.titleText}>{children}</div>
    </div>
  );
};
