import { FILE_API } from "../config/env";

import fetcher from "./index";

export const submitData = async (file: File) => {
  const data = new FormData();
  data.append('file', file);

  return await fetcher({ 
    url: `${FILE_API}/files`, 
    method: 'POST', 
    body: data 
  });
}