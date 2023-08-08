import axios from "axios";
import { lsClient } from "../utils";
const baseURL = "http://localhost:8085/api/v1";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const accessToken = lsClient.getItem();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post(`${baseURL}/token/refresh`, {
          refreshToken: JSON.parse(refreshToken),
        });

        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data.tokens.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(res.data.tokens.refreshToken)
        );
        console.log("Access and Refresh tokens updated!");
        return api(originalRequest);
      } catch (error) {
        window.location.href = "/auth";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
