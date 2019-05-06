import axios from "axios";
import { get } from "https";

const install = (Vue, config = {}) => {
  const client = axios.create(config);

  Object.defineProperty(Vue.prototype, "$_axios", {
    get() {
      return client;
    }
  });
};

export default {
  install
};
