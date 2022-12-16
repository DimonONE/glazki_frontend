import axios from "axios";
import * as config from "../config/config.dev";

const AuthService = {
  login: (name: string, password: string) => {
    return axios
      .post(config.api + "/api/user/login", {
        user: { name: name, password: password },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },

  signup: (user: any) => {
    return axios
        .post(config.api + "/api/user/signup", user)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
  },

  getIP: () => {
    return axios
      .get(`https://api.ipdata.co?api-key=${config.ip_data_API_KEY}`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  },
};

export default AuthService;
