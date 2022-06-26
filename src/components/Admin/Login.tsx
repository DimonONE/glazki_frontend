import React from "react";
import "../css/admin.scss";
import AuthService from "../../services/auth.service";
import LoginButton from "../common/LoginButton";

type IProps = {};

const AdminLogin: React.FC<IProps> = () => {
  return (
    <div className="wrapper fadeInDown login-wrapper">
      <div id="formContent">
        <div className="fadeIn first"></div>
        <div>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Логин"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="Пароль"
          />
          <LoginButton name={"Войти"} login={AuthService.login} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
