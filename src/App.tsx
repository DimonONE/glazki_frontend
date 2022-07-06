// @ts-ignore

import React from "react";
import { RouterCustom } from "./route";
import { Initialization } from "./components/Initialization";
import { makeStyles, Theme } from "@material-ui/core";
import "./styles/mixin.scss";
import { useGlobalState } from "./Store/store";

const App = () => {
  const [settingPage] = useGlobalState("settingPage");
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      background:
        settingPage.background.color || theme.palette.background.default,
      fontSize: settingPage.fontSize.size || "",
      color: settingPage.fontColor.color || "",
    },
  }));

  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <Initialization />
      <RouterCustom />
    </div>
  );
};

export default App;
