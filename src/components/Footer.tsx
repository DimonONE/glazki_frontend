import React from "react";
// @ts-ignore
import logoMini from "../static/images/logo-mini.png";
import "./css/footer.scss";
import "../static/font-awesome/css/all.css";

const Footer = () => {
  if (window.location.pathname.match(/admin/)) {
    return null;
  } else {
    return (
      <footer className="footer">
        <div className="container-fluid footer-first_block">
          <div className="container">
            <div className="footer-first_block__left-side">
              <img src={logoMini} alt="" />
              <span>НАПИШИТЕ НАМ</span>
              <b>mail.skazki@gmail.com</b>
            </div>
            <div className="footer-first_block__right-side">
              <span>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</span>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-telegram"></i>
            </div>
          </div>
        </div>
        <div className="container copyright-block">
          <p className="m-0 text-center">
            Copyright &copy; 2020-2022 Анютины глазки —
            развлекательно-образовательный портал для детей и родителей.
          </p>
          <p className="m-0 text-center">
            Вся информация на сайте предоставляется исключительно в
            образовательных и некоммерческих целях.
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
