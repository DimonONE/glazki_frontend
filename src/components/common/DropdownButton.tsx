import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  name: string;
  type: string;
}

const DropdownButton: React.FC<IProps> = (props) => {
  let navigate = useNavigate();
  const handleClick = () =>
    navigate("/" + props.type, { replace: true, state: { type: props.type } });

  return (
    <div className="dropdown-item" onClick={handleClick}>
      <span>{props.name}</span>
    </div>
  );
};

export default DropdownButton;
