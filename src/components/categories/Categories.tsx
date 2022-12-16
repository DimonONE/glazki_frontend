import React, { useMemo } from "react";
import { useGlobalState } from "../../Store/store";
import "../css/categories.scss";

interface IProps {
    data: any;
    selectCategory: any;
}

const CategoriesComponent: React.FC<IProps> = (props) => {
  const [filterByCategory, setFilterByCategory] =
    useGlobalState("filterByCategory");
  // const categories = useMemo(
  //   () => Array.from({ length: 5 }, (index) => index),
  //   []
  // );

    const categories = props.data;
    console.log(categories);

  return (
    <div className="categories">
      <h2 className="title">КАТЕГОРИИ</h2>
      <ul className="list">
        {categories.map((item: any, index: number) => (
          <li className="list-item" key={index} onClick={() => props.selectCategory(item)}>
              {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComponent;
