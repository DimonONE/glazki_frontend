import React, { useEffect, useState } from "react";
import ItemService from "../../services/item.service";
import "../css/item.scss";
import * as config from "../../config/config.dev";
import Categories from "../categories/Categories";
import Settings from "../common/Settings";
import { makeStyles, Theme } from "@material-ui/core";
import { useGlobalState } from "../../Store/store";

interface State {
  item: {
    name: string;
    logo: string;
    content: any;
    description: string;
  };
}

const Item: React.FC = (props) => {
  const [settingPage] = useGlobalState("settingPage");
  const [state, setState] = useState<State>({
    item: {
      name: "",
      description: "",
      logo: "",
      content: undefined,
    },
  });

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      fontSize: settingPage.fontSize.size || "",
      color: settingPage.fontColor.color || "",
    },
    p: {
      fontSize: settingPage.fontSize.size || "",
      color: settingPage.fontColor.color || "",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    (async function () {
      // @ts-ignore
      let id = /[^/]*$/.exec(window.location.pathname)[0];
      ItemService.getItem(id).then((res: any) => {
        setState((prev) => ({
          ...prev,
          item: res.data,
        }));
      });
    })();
  }, []);

  return (
    <div className={`item-wrapper ${classes.root}`}>
      <div className="d-flex">
        <div className="item-header col-sm-12 col-md-9">
          <h1>{state.item.name}</h1>
          <div className="col">
            <div className="col-sm-12 col-md-4 item-header-logo-wrapper">
              <span
                className="item-header-logo"
                style={{
                  backgroundImage: `url(${config.api}/api/image/${state.item.logo})`,
                }}
              />
            </div>
            <div className="col-sm-12 col-md-12 item-header-description">
              <p>{state.item.description}</p>
            </div>
            <div className="col-sm-12 item-header-actions" />
          </div>
        </div>
        <div className="item-wrapper__categories col-sm-0 col-md-4 col-lg-3">
          <Categories />
        </div>
      </div>

      <div className="item-content">
        <div className="item-content__wrapper col-sm-12 col-md-9">
          <div className="d-flex">
            <p className={`item-content__title ${classes.p}`}>Текст сказки</p>
            <Settings />
          </div>
          <div
            className={`col ${classes.p}`}
            dangerouslySetInnerHTML={{ __html: state.item.content }}
          />
        </div>
        <div className="col-sm-12 col-md-3"></div>
      </div>
    </div>
  );
};

export default Item;
