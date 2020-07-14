import { DATA_API } from "../config/env";

import fetcher, { fetchUrlsArray } from "./index";
import Contract from "../types/Contract";

type EditDataRequest = Omit<Contract, "file">;

export const editData = async (data: EditDataRequest) => {
  return await fetcher({
    url: `${DATA_API}/contracts/${data.id}`,
    method: "PUT",
    body: data,
  });
}

export const fetchSingleData = async (id: number) => {
  return await fetcher({ url: `${DATA_API}/contracts/${id}`});
}

export const fetchData = async (title?: string) => {
  return await fetcher({ url: `${DATA_API}/contracts${title && `?title=${title}`}`});
}

export const removeData = async (id: number) => {
  return await fetcher({ 
    url: `${DATA_API}/contracts/${id}`, 
    method: "DELETE" 
  });
}

type SubmitDataRequest = Omit<Contract, "id" | "file"> & {
  file: string;
};

export const submitData = async (data: SubmitDataRequest) => {
  return await fetcher({
    url: `${DATA_API}/contracts`,
    method: "POST",
    body: data,
  });
}

export const getContractsWithData = async (data: Contract[]) => {
  return await Promise.all(
    data!.map(async (contract) => {
      if (!contract.parts) {
        return contract;
      }
      
      const parts = await fetchUrlsArray(contract.parts.map(part => `${DATA_API}/customers/${part}`));

      return {
        ...contract,
        parts: parts.map(part => part.name),
      }
    })
  );
}