import Vue from "vue";
import Axios from "./plugins/axios";

Vue.use(Axios, {
  baseURL: "http://localhost:3000"
});
