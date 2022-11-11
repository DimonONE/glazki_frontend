import axios from "axios";
import * as config from "../config/config.dev";

const CategoryService = {
    getCategory: (type: string) => {
        return axios
            .get(config.api + "/api/category/" + type)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getCategories: () => {
        return axios
            .get(config.api + "/api/categories")
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getCategoriesByType: (type: string) => {
        return axios
            .get(config.api + "/api/categories/" + type)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    createCategory: (category: any) => {
        axios
            .post(config.api + "/api/category", { category: category })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    updateCategory: (category: any, id: string | number) => {
        axios
            .post(config.api + "/api/category/" + id, { category: category })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};

export default CategoryService;
