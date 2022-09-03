import { getItems } from "../services/API";
import {
  setItems,
  setTags,
  setCompanies,
  setLoading,
  setTotalAmountForCompanies,
    setTotalAmount,
  setTotalAmountForTags
} from "../storage/redux/items/action";
import { store } from "../storage/store";

export const categoryList = ["mug", "shirt"];
export const sortingPreferences = [
    { name: "Price low to high", code: "price&_order=asc" },
    { name: "Price high to low", code: "price&_order=desc" },
    { name: "New to old", code: "added&_order=desc" },
    { name: "Old to new" , code:"added&_order=asc"}

];

export const updateProductList = () =>
  new Promise((resolve, reject) => {
    setLoading(true);
    getItems(createParameterForItems())
        .then((resp) => {
            setItems(resp.data.data);
            setTags(resp.data.tags);
            setCompanies(resp.data.companies);
            setTotalAmountForCompanies(resp.data.productsAmountsForCompanies);
            setTotalAmountForTags(resp.data.productsAmountsForTags);
            setTotalAmount(resp.data.totalItemAmount);

      } )
      .then(() => resolve())
      .catch((err) => {
        reject();
        throw err;
      })
      .finally(() => setLoading(false));
  });







export const createParameterForItems = () => {
    const { filter } = store.getState().items;
    let parameter="";
    Object.keys(filter).forEach(key => {

        filter[key].forEach((el) => {
            if (key === "company") {
                 parameter += `manufacturer=${el?.slug}&`;
            } else {
                   parameter += `tags_like=${el?.tagName}&`;
            }
    
        });
      

    })

    return parameter;
}
  
