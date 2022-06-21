import axios from "axios";
import * as config from "../config/config.dev";

const PageService = {
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

  getPages: () => {
    return axios
      .get(config.api + "/api/pages")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  createPage: (page: any) => {
    axios
      .post(config.api + "/api/page", { page: page })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  updatePage: (page: any, id: string | number) => {
    axios
      .post(config.api + "/api/page/" + id, { page: page })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

export default PageService;
