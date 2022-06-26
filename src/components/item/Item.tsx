import React, { useEffect, useState } from "react";
import ItemService from "../../services/item.service";
import "../css/item.scss";
import * as config from "../../config/config.dev";

interface State {
  item: {
    name: string;
    logo: string;
    content: any;
    description: string;
  };
}

const Item: React.FC = (props) => {
  const [state, setState] = useState<State>({
    item: {
      name: "",
      description: "",
      logo: "",
      content: undefined,
    },
  });

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
    <div className="item-wrapper">
      <div className="item-header">
        <h1>{state.item.name}</h1>

        <div className="col">
          <div className="col-sm-12 col-md-4 item-header-logo-wrapper">
            <span
              className="item-header-logo"
              style={{
                backgroundImage: `url(${config.api}/api/image/${state.item.logo})`,
              }}
            ></span>
          </div>
          <div className="col-sm-12 col-md-12 item-header-description">
            <p>{state.item.description}</p>
          </div>
          <div className="col-sm-12 item-header-actions"></div>
        </div>
      </div>
      <div className="item-content">
        <div className="col-sm-12 col-md-9">
          <p>Текст сказки</p>
          <div
            className="col"
            dangerouslySetInnerHTML={{ __html: state.item.content }}
          />
        </div>
        <div className="col-sm-12 col-md-3"></div>
      </div>
    </div>
  );
};

export default Item;
