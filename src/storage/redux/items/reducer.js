import {
  SET_COMPANIES,
  SET_ITEMS,
  SET_TAGS,
  SET_FILTER,
  SET_PRODUCT_CATEGORY,
  SET_LOADING,
  SET_SORTING_PARAMS,
} from "./constants";

import { sortingPreferences } from "../../../utils/helpers";

const initialState = {
  products: [],
  companies: [],
  tags: [],
  filter: {},
  categories: [],
  productCategory: "mug",
  loading: false,
  sorting: sortingPreferences[0],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, products: action.payload };
    case SET_TAGS:
      return { ...state, tags: action.payload };
    case SET_COMPANIES:
      return { ...state, companies: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_PRODUCT_CATEGORY:
      return { ...state, productCategory: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SORTING_PARAMS:
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};
