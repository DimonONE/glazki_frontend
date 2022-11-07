import React, { useEffect } from "react";
import "../css/sidebar.scss";
// @ts-ignore
import logo from "../../static/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Page {
  name: string;
  type: string;
}

interface IProps {
  changeType: (e: any) => void;
  createPage: () => void;
  editPage: (page: Page) => void;
  pages: Page[];
}

const AdminSidebar: React.FC<IProps> = (props) => {
  useEffect(() => {
    console.log("s");
    return () => {
      "sss";
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </li>
          {props.pages.map((page, index) => {
            return (
              <li
                key={page.type}
                className={index === 0 ? "sidebar-active" : ""}
              >
                <a
                  href="#"
                  onClick={props.changeType}
                  datatype={page.type}
                  data-name={page.name}
                >
                  {page.name}
                </a>
                <FontAwesomeIcon
                  onClick={() => props.editPage(page)}
                  icon={faPenSquare as IconProp}
                />
              </li>
            );
          })}
        </ul>

        <div className="sidebar-footer">
          <button className="btn create-page" onClick={props.createPage}>
            Создать страницу
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
