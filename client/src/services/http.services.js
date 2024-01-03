/* eslint-disable no-undef */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_SERVER_URL,
});

class HttpRequest {
  async get(url) {
    const data = await axiosInstance.get(url);
    return data;
  }
  async post(url, payload, config) {
    const data = await axiosInstance.post(url, payload, config);
    return data;
  }
  async put(url, payload, config) {
    const data = await axiosInstance.put(url, payload, config);
    return data;
  }
  async delete(url, config) {
    const data = await axiosInstance.delete(url, config);
    return data;
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
