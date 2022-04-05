import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//auth header.
instance.defaults.headers.common["Authorization"] = "Bearer token_number";
export default instance;
