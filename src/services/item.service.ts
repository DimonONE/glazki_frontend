import axios from "axios";
import FormData from "form-data";
import * as config from "../config/config.dev";

const ItemService = {
  getPage: (type: string) => {
    return axios
      .get(config.api + "/api/page/" + type)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  getItems: (type: string) => {
    return axios
      .get(config.api + "/api/items?type=" + type)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  getItemsByCategory: (id: string) => {
    return axios
        .get(config.api + "/api/items/category/" + id)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
  },

  getItem: (id: string | number) => {
    return axios
      .get(config.api + "/api/item/" + id)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  createItem: (item: any) => {
    axios
      .post(config.api + "/api/item", { item: item })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  updateItem: (item: any, id: string | number) => {
    axios
      .post(config.api + "/api/item/" + id, { item: item })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  uploadLogo: (file: any) => {
    let data = new FormData();
    data.append("file", file, file.name);

    axios.post(config.api + "/api/uploadImage", data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        //@ts-ignore
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    });
  },
};

export default ItemService;
