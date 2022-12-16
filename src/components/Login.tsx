import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./css/about.scss";
import AuthService from "../services/auth.service";

interface State {
    isLoginForm: true;
}

const Login: React.FC = () => {
    let navigate = useNavigate();
    const [state, setState] = useState<State>({
        isLoginForm: true
    });

    const login = () => {
        let form = document.querySelector('.login-form');

        AuthService.login(getInputValue('.login-form input[name="name"]'),
            getInputValue('.login-form input[name="password"]')).then(result => {
                console.log(result);
            // @ts-ignore
            form.reset();
            localStorage.setItem('token', result.data.token);
            navigate("/");
        });
    };

    const register = () => {
        let form = document.querySelector('.register-form');
        let user = {
            'name': getInputValue('.register-form input[name="login"]'),
            'email': getInputValue('.register-form input[name="email"]'),
            'firstName': getInputValue('.register-form input[name="firstName"]'),
            'lastName': getInputValue('.register-form input[name="lastName"]'),
            'password': getInputValue('.register-form input[name="password"]'),
            'about': getInputValue('.register-form textarea'),
        }

        AuthService.signup(user).then(result => {
            // @ts-ignore
            form.reset();
            setState((prev) => ({ ...prev, isLoginForm: true }));
        });
    };

    const getInputValue = (selector: any) => {
        return document.querySelector(selector).value;
    };

    const switchLoginForm = (isLoginForm: any) => {
        setState((prev) => ({ ...prev, isLoginForm: isLoginForm }));
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            {state.isLoginForm ? <form className="login-form" action="" autoComplete="off">
                                <h4>Вход</h4>
                                <div className="form-group">
                                    <label htmlFor="name">Логин:</label>
                                    <input type="text" className="form-control" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль:</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <button type="button" id="sendlogin" className="btn btn-primary" onClick={login}>Войти</button>
                                <a onClick={() => switchLoginForm(false)}>Зарегистрироватся</a>
                            </form> : null}

                            {!state.isLoginForm ? <form className="register-form" action="" autoComplete="off">
                                <h4>Регистрация</h4>
                                <div className="form-group">
                                    <label htmlFor="login">Логин*:</label>
                                    <input type="text" className="form-control" name="login" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль*:</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password_repeat">Повторите пароль*:</label>
                                    <input type="password" className="form-control" name="password_repeat" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*:</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">Имя:</label>
                                    <input type="text" className="form-control" name="firstName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Фамилия:</label>
                                    <input type="text" className="form-control" name="lastName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="about">О себе:</label>
                                    <textarea name="about" id=""></textarea>
                                </div>
                                <button type="button" id="sendlogin" className="btn btn-primary" onClick={register}>Зарегистрироваться</button>
                                <a onClick={() => switchLoginForm(true)}>Уже есть аккаунт?</a>
                            </form> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
