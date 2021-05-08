import { makeStyles } from "@material-ui/core";
import { Email, LocalPhone, PinDrop } from "@material-ui/icons";

import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  line: {
    backgroundColor: "rgb(51, 153, 255)",
    display: "flex",
    height: 2,
  },
  content: {
    backgroundColor: "rgb(51, 153, 255)",
    display: "flex",
    height: 300,
    marginTop: 4,
    justifyContent: "center",
  },
  info: {
    display: "flex",
    flex: 1,
    maxWidth: 1400,
    flexDirection: "column",
    paddingTop: 30,
    color: "#ffffff",
  },
  infoItem: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center',
      '> span': {
          marginLeft: 5,
      }
  },
  icon: {
      marginRight: 5,
  }
});

export const Footer = () => {
  const style = useStyles();
  return (
    <div class={style.root}>
      <div class={style.line}></div>
      <div class={style.content}>
        <div class={style.info}>
          <div class={style.infoItem}>
            <span class={style.icon}><LocalPhone /></span>
            <span>(+84) 0932805342</span>
          </div>
          <div class={style.infoItem}>
          <span class={style.icon}><Email /></span>
            <span>jennifer@diamondrice.vn</span>
          </div>
          <div class={style.infoItem}>
          <span class={style.icon}><PinDrop /></span>
            <span>Nguyễn Văn Nguyễn, Ho Chi Minh city, Viet Nam</span>
          </div>
        </div>
      </div>
    </div>
  );
};
