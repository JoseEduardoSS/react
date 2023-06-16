import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/v2/",
});

export default http;