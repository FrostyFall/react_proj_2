import authSlice from "./slices/auth.slice";
import catalogSlice from "./slices/catalog.slice";
import companiesSlice from "./slices/companies.slice";

export const { setUser, resetUser } = authSlice.actions;
export const { setCatalog, setActivatedCatalog, resetActivatedCatalog } =
  catalogSlice.actions;
export const {
  setCompanies,
  resetCompanies,
  setActivatedCompany,
  resetActivatedCompany,
} = companiesSlice.actions;
