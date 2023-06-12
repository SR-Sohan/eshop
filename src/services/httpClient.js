import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 15000,
});
const response = (data) => data.data;

const httpRequest = {
  get: (url) => instance.get(url).then(response),
  post: (url, body) => instance.post(url, body).then(response),
  patch: (url, body) => instance.patch(url, body).then(response),
  remove: (url) => instance.delete(url).then(response),
};

export default httpRequest;