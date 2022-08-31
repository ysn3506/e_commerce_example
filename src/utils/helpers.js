import { getItems } from "../services/API";
import {
  setItems,
  setTags,
  setCompanies,
  setLoading,
} from "../storage/redux/items/action";

export const categoryList = ["mug", "shirt"];
export const sortingPreferences=["Price low to high","Price high to low","New to old","Old to new"]

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
