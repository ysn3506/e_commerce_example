import API from "./BASE_API";
import { store } from "../storage/store";

export const getItems = (parameters = "") => {
  const { productCategory, sorting } = store.getState().items;
  return  API.get(`/items?itemType=${productCategory}&${parameters}&_sort=${sorting.code}`);
}
   
  



export const getAllCompanies = () =>
  API.get("/companies");

export const getAllTags = () =>
    getItems().then((resp) => {
    //  according to items come from API response, tags list is obtained and tags property for each item cames as array.
    // In order to provide a array of string elements, flat method is used as below.
    const tagsList = resp.data.map((item) => item.tags).flat(1);

    const uniqeTags = tagsList.filter((v, i, a) => a.indexOf(v) === i); // In order to be sure that, tag names are not repeated

    return uniqeTags.sort((a, b) => (a.tag > b.tag ? 1 : -1)); //sort according to tag names
  });


   