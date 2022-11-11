import React, { useEffect, useState } from "react";
import "../css/admin.scss";
import CategoryService from "../../services/category.service";

interface IProps {
    item: number | null;
    type: string;
}

interface State {}

const CategoryComponent: React.FC<IProps> = (props) => {
    const [state, setState] = useState<State>({});

    console.log(props.type);

    useEffect(() => {

    } );

    const create = () => {
        // @ts-ignore
        let name = document.querySelector('input[name="name"]').value;
        CategoryService.createCategory({name: name, pageType: props.type});
    };

    return (
        <div className="flex category-component">
            <h4>Создать новую категорию</h4>

            <div className="flex">
                <div className="admin-content__main-view">
                    <div className="input-field">
                        <label htmlFor="name">Название*:</label>
                        <input type="text" name="name" />
                    </div>
                </div>

                <button className="btn btn-primary" onClick={create}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default CategoryComponent;
