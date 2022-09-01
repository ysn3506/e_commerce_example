import { getItems } from "../services/API";
import {
  setItems,
  setTags,
  setCompanies,
  setLoading,
} from "../storage/redux/items/action";

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
    getItems()
      .then((resp) => setItems(resp.data))
      .then(() => {
        setTags();
        setCompanies();
      })
      .then(() => resolve())
      .catch((err) => {
        reject();
        throw err;
      })
      .finally(() => setLoading(false));
  });
