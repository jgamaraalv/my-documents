import { isPlainObject } from "lodash-es";

export interface FetcherParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit | object;
}

const fetcher = async ({ url, method = "GET", headers, body }: FetcherParams) => {
  if (isPlainObject(body)) {
    headers = { ...headers, 'Content-Type': 'application/json' };
    body = JSON.stringify(body);
  }

  const response = await fetch(url, { method, headers, body: body as BodyInit });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  return response.json();
};

export const fetchUrlsArray = (array: string[]) => {
  return Promise.all(array.map(async (url) => await fetcher({ url })))
}

export default fetcher;