import React, { useEffect, useState } from "react";
import "../css/admin.css";
import AdminSidebar from "./Sidebar";
import ItemService from "../../services/item.service";
import ItemList from "../item/ItemList";
import EditorComponent from "./Editor";
import PageComponent from "./Page";
import PageService from "../../services/page.service";

type IProps = {};

interface State {
  editor: any;
  type: string;
  name: string;
  items: [];
  pages: [];
  isEditor: boolean;
  isCreatePage: boolean;
  selectedItem: number | null;
  selectedPage: number | null;
}

const AdminDashboard: React.FC<IProps> = (props) => {
  const [state, setState] = useState<State>({
    editor: null,
    type: "skazki",
    name: "Сказки",
    items: [],
    pages: [],
    isEditor: false,
    isCreatePage: false,
    selectedItem: null,
    selectedPage: null,
  });

  const changeType = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    document.querySelector(".sidebar-active").className = "";
    e.target.parentElement.className = "sidebar-active";
    setState((prev) => ({
      ...prev,
      type: e.target.dataset.type,
      name: e.target.dataset.name,
      isEditor: false,
      isCreatePage: false,
    }));

    ItemService.getItems(e.target.dataset.type).then((res: any) => {
      setState((prev) => ({
        ...prev,
        items: res.data,
      }));
    });
  };
  const createItem = () => {
    setState((prev) => ({
      ...prev,
      isEditor: true,
      selectedItem: null,
      isCreatePage: false,
    }));
  };

  const adminSelectItem = (item: any) => {
    setState((prev) => ({
      ...prev,
      selectedItem: item,
      isEditor: true,
    }));
  };

  const createPage = () => {
    setState((prev) => ({
      ...prev,
      isCreatePage: true,
      isEditor: false,
    }));
  };

  const editPage = (page: any) => {
    setState((prev) => ({
      ...prev,
      selectedPage: page,
      isCreatePage: true,
      isEditor: false,
    }));
  };

  useEffect(() => {
    (async function () {
      ItemService.getItems(state.type).then((res: any) => {
        setState((prev) => ({
          ...prev,
          items: res.data.length ? res.data : null,
        }));
      });
    })();

    (async function () {
      PageService.getPages().then((res: any) => {
        setState((prev) => ({
          ...prev,
          pages: res.data.length ? res.data : [],
        }));
      });
    })();
  }, []);

  return (
    <div className="admin-dashboard flex">
      <AdminSidebar
        pages={state.pages}
        editPage={editPage}
        createPage={createPage}
        changeType={changeType}
      />

      <div className="admin-content">
        <div className="row">
          <div className="col-sm-9">
            <h1>{state.name}</h1>
          </div>
          <div className="col-sm-3">
            <button onClick={createItem} className="btn btn-light">
              Создать
            </button>
          </div>
        </div>

        {state.items.length && !state.isEditor && !state.isCreatePage ? (
          <ItemList
            items={state.items}
            admin={true}
            adminSelectItem={adminSelectItem}
          />
        ) : null}
        {state.isEditor ? (
          <EditorComponent item={state.selectedItem} type={state.type} />
        ) : null}
        {state.isCreatePage ? (
          //@ts-ignore
          <PageComponent page={state.selectedPage} />
        ) : null}
      </div>
    </div>
  );
};

export default AdminDashboard;
