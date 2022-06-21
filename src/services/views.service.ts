import axios from "axios";
import * as config from "../config/config.dev";
import { v4 as uuidv4 } from "uuid";

const ViewsService = {
  createUUID: () => {
    if (localStorage.getItem("uuid")) return;
    let uuid = uuidv4();
    localStorage.setItem("uuid", uuid);
  },

  updateViews: (view: any, id: number | string) => {
    axios
      .post(config.api + "/api/item/views/" + id, { view: view })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

export default ViewsService;
