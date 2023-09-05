import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import catalogSlice from "./slices/catalog.slice";
import companiesSlice from "./slices/companies.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    catalog: catalogSlice.reducer,
    companies: companiesSlice.reducer,
  },
});

export default store;
