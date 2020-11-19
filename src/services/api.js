import axios from 'axios';

import {HttpCode} from "../const";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized, onBadRequest, onNotFound, onServerError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case HttpCode.BAD_REQUEST:
        onBadRequest();
        throw err;
      case HttpCode.NOT_FOUND:
        onNotFound();
        throw err;
      case HttpCode.SERVER_ERROR:
        onServerError();
        throw err;
      default:
        throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
