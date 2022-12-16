import React, { Fragment, useEffect, useMemo, useState } from "react";
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
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useGlobalState } from "../Store/store";
import { PageT } from "../types/Pages";

interface State {
  showDropdown: boolean;
  isShowSearch: boolean;
  pagesMobile: PageT[];
  pages: PageT[];
}

const Header: React.FC = () => {
  const [pages] = useGlobalState("pages");
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
    if (pages) {
      setState((prev) => ({ ...prev, pages, pagesMobile: pages }));
    }
  }, [pages]);

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
                  <NavLink className="nav-link nav-hover" to="/login">
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

        {state.showDropdown ? (
          <div
            className="col dropdown"
            onMouseLeave={() =>
              setState((prev) => ({ ...prev, showDropdown: false }))
            }
          >
            {state.pages.map((element) => (
              <div key={element.type} className="dropdown-block">
                <DropdownButton
                  name={`${element.name}`}
                  type={`${element.type}`}
                />
              </div>
            ))}
          </div>
        ) : null}

        {state.showDropdown && state.pages ? (
          <ul className="col dropdown-mobile">
            {state.pagesMobile.map((page) => {
              return (
                <li>
                  <DropdownButton
                    name={`${page.name}`}
                    type={`${page.type}`}
                    click={() =>
                      setState((prev) => ({ ...prev, showDropdown: false }))
                    }
                  />
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
