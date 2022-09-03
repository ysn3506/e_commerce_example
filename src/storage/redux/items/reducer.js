import {
  SET_COMPANIES,
  SET_ITEMS,
  SET_TAGS,
  SET_TAG_FILTER,
  SET_COMPANY_FILTER,
  SET_PRODUCT_CATEGORY,
  SET_LOADING,
  SET_SORTING_PARAMS,
  SET_TOTAL_AMOUNT_FOR_COMPANIES,
  SET_TOTAL_AMOUNT_FOR_TAGS,
  SET_TOTAL_ITEM_AMOUNT,
} from "./constants";

import { sortingPreferences } from "../../../utils/helpers";

const initialState = {
  products: [],
  companies: [],
  tags: [],
  filter: { company: [], tag: [] },
  categories: [],
  productCategory: "mug",
  loading: false,
  sorting: sortingPreferences[0],
  totalAmountForCompanies: 0,
  totalAmountForTags: 0,
  totalProductAmount:0
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, products: action.payload };
    case SET_TAGS:
      return { ...state, tags: action.payload };
    case SET_COMPANIES:
      return { ...state, companies: action.payload };
    case SET_PRODUCT_CATEGORY:
      return { ...state, productCategory: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SORTING_PARAMS:
      return { ...state, sorting: action.payload };
    case SET_COMPANY_FILTER:
      return { ...state, filter: { ...state.filter, company: action.payload } };
    case SET_TAG_FILTER:
      return { ...state, filter: { ...state.filter, tag: action.payload } };
    case SET_TOTAL_AMOUNT_FOR_COMPANIES:
      return { ...state, totalAmountForCompanies: action.payload };
    case SET_TOTAL_AMOUNT_FOR_TAGS:
      return { ...state, totalAmountForTags: action.payload };
    case SET_TOTAL_ITEM_AMOUNT:
      return { ...state, totalProductAmount: action.payload };

    default:
      return state;
  }
};
