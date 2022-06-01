import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/venilson1",
});

export default api;
