import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownButton from "./common/DropdownButton";
import "./css/header.scss";
// @ts-ignore
import logo from "../static/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faSearch,
  faStar,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import PageService from "../services/page.service";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Page {
  name: string;
  type: string;
}

interface State {
  showDropdown: boolean;
  isShowSearch: boolean;
  pagesMobile: Page[];
  pages: Page[];
}

const Header: React.FC = () => {
  const [state, setState] = useState<State>({
    showDropdown: false,
    isShowSearch: false,
    pages: [],
    pagesMobile: [],
  });

  const onMenuItemClick = () => {
    setState((prev) => ({
      ...prev,
      showDropdown: !prev.showDropdown,
    }));
  };

  useEffect(() => {
    (async function () {
      let pages: any = [];
      PageService.getPages().then((res: any) => {
        for (let i = 1; i < res.data.length; i += 2) {
          pages.push(
            <div className="dropdown-block">
              <DropdownButton
                name={`${res.data[i - 1].name}`}
                type={`${res.data[i - 1].type}`}
              />
              <DropdownButton
                name={`${res.data[i].name}`}
                type={`${res.data[i].type}`}
              />
            </div>
          );
          if (i !== res.data.length)
            pages.push(<div className="dropdown-separator"></div>);
        }
        setState((prev) => ({ ...prev, pages: pages, pagesMobile: res.data }));
      });
    })();
  }, []);

  if (window.location.pathname.match(/admin/)) {
    return null;
  } else {
    return (
      <div className="header">
        <nav className="navbar navbar-expand">
          <div className="container">
            <div className="mobile-search">
              <a
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    isShowSearch: !prev.isShowSearch,
                  }))
                }
              >
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </a>
            </div>
            <input
              style={{ display: state.isShowSearch ? "block" : "none" }}
              type="search"
              className="mobile-search-input"
              value=""
              name="search"
              placeholder="Поиск по сайту..."
            />

            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a onClick={onMenuItemClick} className="nav-link first-link">
                    <FontAwesomeIcon icon={faBars as IconProp} />
                    <span className="nav-item-display">Меню</span>
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item nav-item-display">
                  <NavLink className="nav-link nav-hover" to="/about">
                    <FontAwesomeIcon icon={faPencilAlt as IconProp} />
                    Логин/Регистрация
                  </NavLink>
                </li>
                <li className="nav-item nav-item-display">
                  <NavLink className="nav-link nav-hover" to="/contact">
                    <FontAwesomeIcon icon={faStar as IconProp} />
                    Избранное
                  </NavLink>
                </li>
                <li className="nav-item nav-item-display">
                  <NavLink className="nav-link nav-hover" to="/blog">
                    <FontAwesomeIcon icon={faHeart as IconProp} />
                    Ваши пожелания
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="header-search">
              <FontAwesomeIcon icon={faSearch as IconProp} />
              <input
                type="search"
                value=""
                name="s"
                id="s story"
                placeholder="Поиск по сайту..."
              />
            </div>
          </div>
        </nav>

        {state.showDropdown && state.pages ? (
          <div className="col dropdown">{/*{state.pages}*/}</div>
        ) : null}

        {state.showDropdown && state.pages ? (
          <ul className="col dropdown-mobile">
            {state.pagesMobile.map((page) => {
              return (
                <li>
                  <DropdownButton name={`${page.name}`} type={`${page.type}`} />
                </li>
              );
            })}
            <li>
              <NavLink className="nav-link nav-hover" to="/about">
                <FontAwesomeIcon icon={faPencilAlt as IconProp} />
                Вход
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link nav-hover" to="/about">
                <FontAwesomeIcon icon={faPencilAlt as IconProp} />
                Регистрация
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link nav-hover" to="/contact">
                <FontAwesomeIcon icon={faStar as IconProp} />
                Избранное
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link nav-hover" to="/blog">
                <FontAwesomeIcon icon={faHeart as IconProp} />
                Ваши пожелания
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
};

export default Header;
