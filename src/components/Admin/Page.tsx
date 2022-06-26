import React, { useState } from "react";
import "../css/admin.scss";
import PageService from "../../services/page.service";
import Select from "react-select";

interface IProps {
  page: null | {
    _id: string | number;
    media: string;
    name: string;
  };
}

interface State {
  isEmptyEditor: boolean;
  page: any;
  options: { value: string; label: string }[];
  defaultValue: number | string;
}

const PageComponent: React.FC<IProps> = (props) => {
  const [state, setState] = useState<State>({
    isEmptyEditor: false,
    page: props.page ? props.page : {},
    options: [
      { value: "false", label: "Нет" },
      { value: "true", label: "Аудио/Видео" },
    ],
    defaultValue: props.page
      ? props.page.media
        ? props.page.media
        : "false"
      : "false",
  });

  const create = () => {
    let page = {};
    if (props.page) page = props.page;
    if (page) {
      // @ts-ignore
      page.name = document.querySelector('input[name="name"]').value;
      // @ts-ignore
      page.description = document.querySelector(
        'textarea[name="description"]'
        // @ts-ignore
      ).value;
      // @ts-ignore
      page.type = document.querySelector('input[name="type"]').value;
    }

    if (props.page) {
      PageService.updatePage(page, props.page._id);
    } else {
      PageService.createPage(page);
    }
  };

  // componentWillReceiveProps(nextProps) {
  //     if (nextProps.page) {
  //         this.setState({
  //             page: this.props.page
  //         });
  //         document.querySelector('input[name="name"]').value = this.props.page.name;
  //         document.querySelector('textarea[name="description"]').value = this.props.page.description;
  //         document.querySelector('input[name="type"]').value = this.props.page.type;
  //     }
  // }

  return (
    <div className="flex">
      <div className="admin-content__main-view">
        <div className="input-field">
          <label htmlFor="name">Название:</label>
          <input
            type="text"
            name="name"
            defaultValue={state.page ? state.page.name : ""}
          />
        </div>
        <div className="input-field">
          <label htmlFor="description">Описание:</label>
          <textarea
            name="description"
            rows={2}
            defaultValue={state.page ? state.page.description : ""}
          />
        </div>
        <div className="input-field">
          <label htmlFor="type">Тип:</label>
          <input
            type="text"
            name="type"
            defaultValue={state.page ? state.page.type : ""}
          />
        </div>
        <div className="input-field">
          <label htmlFor="type">Файлы:</label>
          {/*// @ts-ignore*/}
          <Select options={state.options} defaultValue={state.defaultValue} />
        </div>
      </div>

      <br />
      <button className="btn btn-light" onClick={create}>
        Сохранить
      </button>
    </div>
  );
};

export default PageComponent;
