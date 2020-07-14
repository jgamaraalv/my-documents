import { DATA_API } from "../config/env";

import fetcher from "./index";
import Customer from "../types/Customer";

type EditDataRequest = Customer;

export const editData = async (data: EditDataRequest) => {
  return await fetcher({
    url: `${DATA_API}/customers/${data.id}`,
    method: "PUT",
    body: data,
  });
}

export const fetchSingleData = async (id: number) => {
  return await fetcher({ url: `${DATA_API}/customers/${id}`});
}

export const fetchData = async (name?: string) => {
  return await fetcher({ url: `${DATA_API}/customers${name && `?name=${name}`}`});
}

export const removeData = async (id: number) => {
  return await fetcher({ 
    url: `${DATA_API}/customers/${id}`, 
    method: "DELETE" 
  });
}

type SubmitDataRequest = Omit<Customer, "id">;

export const submitData = async (data: SubmitDataRequest) => {
  return await fetcher({
    url: `${DATA_API}/customers`,
    method: "POST",
    body: data,
  });
}