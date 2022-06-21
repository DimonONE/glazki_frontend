import React, { useState } from "react";
import ItemName from "./ItemName";
import * as config from "../../config/config.dev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faEye,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ItemType {
  _id: string | number;
  name: string;
  time: string;
  logo: string;
  description: string;
  author: string;
  views: any;
  viewsCount: any;
  likes: string | number;
  dislikes: string | number;
}

interface IProps {
  items: ItemType[];
  admin?: boolean;
  adminSelectItem?: (item: any) => void;
}

const ItemList: React.FC<IProps> = (props) => {
  const [state, setState] = useState({
    showDropdown: false,
  });

  return (
    <div className="col">
      {props.items.map((item) => {
        return (
          <div
            key={item.name}
            className="col-sm-12 item"
            onClick={() => {
              if (props?.adminSelectItem) props.adminSelectItem(item);
            }}
          >
            <div className="item-logo">
              <div
                className="item-logo__wrapper"
                style={{
                  backgroundImage: `url(${config.api}/api/image/${item.logo})`,
                }}
              >
                {/*<img src={"http://localhost:4000/api/image/" + item.logo} alt=""/>*/}
              </div>
            </div>
            <div className="item-body">
              <div className="col">
                {props.admin ? (
                  item.name
                ) : (
                  <ItemName name={item.name} id={item._id} />
                )}
              </div>
              <div className="col item-actions">
                <div className="item-views">
                  <FontAwesomeIcon icon={faEye as IconProp} />
                  <span>{item.views ? item.viewsCount : "0"}</span>
                </div>
                <div className="item-likes">
                  <FontAwesomeIcon icon={faThumbsUp as IconProp} />
                  <span>{item.likes ? item.likes : "0"}</span>
                  <FontAwesomeIcon icon={faThumbsDown as IconProp} />
                  <span>{item.dislikes ? item.dislikes : "0"}</span>
                </div>
                <div className="item-time">
                  <FontAwesomeIcon icon={faClock as IconProp} />
                  <span>{item.time ? item.time : ""}</span>
                </div>
              </div>
              <div className="col">
                <p>{item.description}</p>
              </div>
              <div className="col">
                <span>Автор:</span>
                <span>{item.author}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
