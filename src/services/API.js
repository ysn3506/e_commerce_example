import API from "./BASE_API"


export const getItems = (parameters="", page=1) => API.get(`/items?${parameters}&_page=${page}&_limit=16`);
export const getCompanies = (parameters = "") => API.get(`/companies${parameters}`);