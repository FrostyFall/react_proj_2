import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";
import { ICatalogState } from "../interfaces/catalog.interface";
import { ICatalog } from "src/utils/interfaces/catalog.interface";
import { ICompaniesState } from "../interfaces/companies.interface";
import { ICompany } from "src/utils/interfaces/company.interface";

const InitialState: ICompaniesState = {
  data: [],
  activatedCompany: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: InitialState,
  reducers: {
    setCompanies: (state, { payload }: PayloadAction<ICompany[]>) => {
      state.data = payload;
    },
    resetCompanies: (state) => {
      state.data = [];
    },
    setActivatedCompany: (state, { payload }: PayloadAction<ICompany>) => {
      state.activatedCompany = payload;
    },
    resetActivatedCompany: (state) => {
      state.activatedCompany = null;
    },
  },
});

export default companiesSlice;
