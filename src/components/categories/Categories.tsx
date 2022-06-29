import React, { useMemo } from "react";
import { useGlobalState } from "../../Store/store";
import "../css/categories.scss";

const Categories = () => {
  const [filterByCategory, setFilterByCategory] =
    useGlobalState("filterByCategory");
  const categories = useMemo(
    () => Array.from({ length: 5 }, (index) => index),
    []
  );
  return (
    <div className="categories">
      <h2 className="title">КАТЕГОРИИ</h2>
      <ul className="list">
        {categories.map((item, index) => (
          <li className="list-item" key={index}>
            КАТЕГОРИЯ
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
