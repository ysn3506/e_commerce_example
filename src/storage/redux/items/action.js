
import { getAllCompanies, getAllTags } from "../../../services/API";
import { store } from "../../store";
import { SET_ITEMS, SET_COMPANIES, SET_TAGS ,SET_SORTING_PARAMS, SET_PRODUCT_CATEGORY, SET_LOADING} from "./constants";

const callAction = (type, data) =>
  store.dispatch({ type: type, payload: data });

export const setItems = (data) => callAction(SET_ITEMS, data);


export const setCompanies = () => {
    getAllCompanies()
        .then((resp) =>
            resp.data.map((company) => {
                const amount = store
                    .getState()
                    .items.products.filter(
                        (product) => product.manufacturer === company.slug).length;
                return { company: company, amount: amount };
            })
        )
        .then((resp) => {
            const companyToShow = resp
                .filter((company) => company.amount > 0)
                .sort((a, b) => (a.name > b.name ? 1 : -1));

            return callAction(SET_COMPANIES, companyToShow);
        })
        .catch(err => {
            throw err
        })
}



export const setTags = () => {
  getAllTags()
    .then((resp) =>
      resp.map((tag) => {
        // This function gives the tag name and amount of products for each tag.
        const amount = store
          .getState()
          .items.products.filter((product) =>
            product.tags.includes(tag)
          ).length;
        return { tag: tag, amount: amount };
      })
    )
    .then((resp) => {
      const tagsToShow = resp
        .filter((tag) => tag.amount > 0)
        .sort((a, b) => (a.tag > b.tag ? 1 : -1));
      return callAction(SET_TAGS, tagsToShow);
    })
    .catch((err) => {
      throw err;
    });
};


export const setLoading = (bool) =>callAction(SET_LOADING, bool)

export const setProductCategory = (data) => callAction(SET_PRODUCT_CATEGORY, data);
   
export const setSorting = (sort) => callAction(SET_SORTING_PARAMS, sort);

