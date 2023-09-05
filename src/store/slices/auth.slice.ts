import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";

const InitialState: IAuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export default authSlice;
