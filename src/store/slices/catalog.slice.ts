import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";
import { ICatalogState } from "../interfaces/catalog.interface";
import { ICatalog } from "src/utils/interfaces/catalog.interface";

const InitialState: ICatalogState = {
  data: [],
  activatedCatalog: null,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: InitialState,
  reducers: {
    setCatalog: (state, { payload }: PayloadAction<ICatalog[]>) => {
      state.data = payload;
    },
    setActivatedCatalog: (state, { payload }: PayloadAction<ICatalog>) => {
      state.activatedCatalog = payload;
    },
    resetActivatedCatalog: (state) => {
      state.activatedCatalog = null;
    },
  },
});

export default catalogSlice;
