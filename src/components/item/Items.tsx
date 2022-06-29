import React, { useEffect, useState } from "react";
import ItemList, { ItemType } from "./ItemList";
import ItemService from "../../services/item.service";
import "../css/item.scss";
import PageService from "../../services/page.service";
import AuthService from "../../services/auth.service";
import ViewsService from "../../services/views.service";
import Categories from "../categories/Categories";

interface State {
  items: ItemType[];
  page: {
    name: string;
    description: string;
  };
}

interface IProps {
  type: string;
}

const Items: React.FC<IProps> = ({ type }) => {
  const [state, setState] = useState<State>({
    items: [],
    page: {
      name: "",
      description: "",
    },
  });

  const loadData = (type: string) => {
    PageService.getPage(type).then((res: any) => {
      setState((prev) => ({ ...prev, page: res.data ? res.data : null }));
    });

    ItemService.getItems(type).then((res: any) => {
      setState((prev) => ({ ...prev, items: res.data.length ? res.data : [] }));
    });
  };

  useEffect(() => {
    (async function () {
      loadData(type);
      AuthService.getIP().then((res) => {
        console.log(res);
      });
      ViewsService.createUUID();
    })();
  }, [type]);

  return (
    <div className="col d-flex">
      <div className="col-sm-12 col-md-8 col-lg-9">
        <h1>{state.page ? state.page.name : ""}</h1>
        <p>{state.page ? state.page.description : ""}</p>
        {state.items.length ? <ItemList items={state.items} /> : null}
      </div>
      <div className="col-sm-0 col-md-4 col-lg-3">
        <Categories />
      </div>
    </div>
  );
};

export default Items;
