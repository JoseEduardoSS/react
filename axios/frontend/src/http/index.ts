import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/product/add",
});

export default http;