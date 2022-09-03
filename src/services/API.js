import API from "./BASE_API";
import { store } from "../storage/store";

export const getItems = (parameters = "", page=0) => {
  const { productCategory, sorting } = store.getState().items;
  return API.get(`/items?itemType=${productCategory}&${parameters}&_sort=${sorting.code}`, {
    headers: {
      page:page
    }
  });
}
   
