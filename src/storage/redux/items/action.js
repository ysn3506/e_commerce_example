import { store } from "../../store";
import {
  SET_ITEMS,
  SET_COMPANIES,
  SET_TAGS,
  SET_TAG_FILTER,
  SET_COMPANY_FILTER,
  SET_SORTING_PARAMS,
  SET_PRODUCT_CATEGORY,
  SET_LOADING,
  SET_TOTAL_AMOUNT_FOR_COMPANIES,
  SET_TOTAL_AMOUNT_FOR_TAGS,
  SET_TOTAL_ITEM_AMOUNT,
  TOGGLE_FILTERING,
} from "./constants";

const callAction = (type, data) =>
  store.dispatch({ type: type, payload: data });

export const setItems = (data) => callAction(SET_ITEMS, data);

export const setCompanies = (companies) => callAction(SET_COMPANIES, companies);

export const setTags = (tags) => callAction(SET_TAGS, tags);

export const setLoading = (bool) => callAction(SET_LOADING, bool);

export const setProductCategory = (data) =>
  callAction(SET_PRODUCT_CATEGORY, data);

export const setSorting = (sort) => callAction(SET_SORTING_PARAMS, sort);

export const setTotalAmountForCompanies = (data) =>
  callAction(SET_TOTAL_AMOUNT_FOR_COMPANIES, data);


export const setTotalAmount = (data) =>
  callAction(SET_TOTAL_ITEM_AMOUNT, data);  
  
export const setTotalAmountForTags = (data) =>
  callAction(SET_TOTAL_AMOUNT_FOR_TAGS, data);

export const setCompanyFilter = (data) => callAction(SET_COMPANY_FILTER, data);

export const setTagFilter = (data) => callAction(SET_TAG_FILTER, data);

export const toggleFiltering=()=>callAction(TOGGLE_FILTERING,true)