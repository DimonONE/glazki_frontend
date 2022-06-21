import React from "react";
import { useNavigate } from "react-router-dom";
import ViewsService from "../../services/views.service";

interface IProps {
  id: string | number;
  name: string;
}

const ItemName = (props: IProps) => {
  let navigate = useNavigate();
  const handleClick = () => {
    ViewsService.updateViews({ token: localStorage.getItem("uuid") }, props.id);
    navigate("/item/" + props.id);
  };

  return (
    <span className="item-name" onClick={handleClick}>
      {props.name}
    </span>
  );
};

export default ItemName;
