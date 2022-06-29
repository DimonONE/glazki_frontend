import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface IProps {
  name: string;
  type: string;
  click?: () => void;
}

const DropdownButton: React.FC<IProps> = ({ click, ...props }) => {
  return (
    <NavLink to={props.type} className="dropdown-item" onClick={click}>
      <span>{props.name}</span>
    </NavLink>
  );
};

export default DropdownButton;
