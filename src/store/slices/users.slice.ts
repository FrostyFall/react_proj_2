import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/utils/interfaces/user.interface";
import { IUsersState } from "../interfaces/users.interface";

const authUser: IUser = {
  id: 0,
  firstName: "John",
  lastName: "Doe",
  email: "john@gmail.com",
  quantity: 1,
};

const allUsers: IUser[] = [
  authUser,
  {
    id: 1,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@gmail.com",
    quantity: 5,
  },
];

const InitialState: IUsersState = {
  authUser,
  allUsers,
  sortedUsers: [...allUsers],
  search: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState: InitialState,
  reducers: {
    setSortedUsers: (state, { payload }: PayloadAction<IUser[]>) => {
      state.sortedUsers = payload;
    },
    setUsersSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    resetUsersSearch: (state) => {
      state.search = "";
    },
  },
});

export default usersSlice;
