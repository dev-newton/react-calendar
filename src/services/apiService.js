import axios from "axios";

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
/* eslint-disable import/no-anonymous-default-export */

export default {
  url: REACT_APP_API_URL,
  headers() {
    let header = {};
    header["Content-Type"] = "application/json";

    return header;
  },

  getForecast(data) {
    return axios({
      method: "get",
      url: `${this.url}/${data.city}/${data.datetime}?key=${REACT_APP_API_KEY}`,
      headers: this.headers(),
    });
  },
};
