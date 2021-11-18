import { makeRequest } from "./client";

interface Request {
  url: string;
  params: object;
}

const polygonRequest = async ({ url, params }: Request) => {
  const baseURL = `https://api.polygon.io`;
  const response = await makeRequest({
    baseURL,
    url,
    params: {
      ...params,
      apiKey: process.env.REACT_APP_POLYGON_API_KEY,
    },
    headers: {
      // Authorization: `Bearer ${process.env.REACT_APP_POLYGON_API_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const polygonResponse = response?.data;

  return polygonResponse;
};

export const requestStockTicker = (stockTicker: any) =>
  polygonRequest({
    url: `/v3/reference/tickers`,
    params: {
      ticker: stockTicker,
    },
  });

