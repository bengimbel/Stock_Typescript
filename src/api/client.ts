

import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import qs from "query-string";

export const makeRequest = (
  { method, baseURL, url, params, headers, data }: AxiosRequestConfig
): AxiosPromise<any> =>
  axios({
    method,
    baseURL,
    url,
    params,
    headers,
    data,
    paramsSerializer: (params: any): string =>
      qs.stringify(params, { arrayFormat: "bracket" }),
  });
