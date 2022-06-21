import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  name: string;
  login: (name: string, password: string) => Promise<any>;
}

const LoginButton: React.FC<IProps> = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    props
      .login(
        // @ts-ignore
        document.querySelector("#login").value,
        // @ts-ignore
        document.querySelector("#password").value
      )
      .then((res) => {
        if (!res.response) {
          navigate("/admin/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fadeIn fourth login-btn">
      <button onClick={handleClick} className="btn btn-secondary">
        {props.name}
      </button>
    </div>
  );
};

export default LoginButton;
