import { ContentContainer, SearchInput, Title } from "src/commonStyles";
import { Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "src/store";
// import { setCatalog, setUser } from "src/store/actions";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { APP_ROUTES } from "src/utils/constants";
import { IUser } from "src/utils/interfaces/user.interface";
import UserTable from "src/components/ui/UserTable";
import {
  resetUsersSearch,
  setSortedUsers,
  setUsersSearch,
} from "src/store/actions";

export default function TopUsers() {
  const dispatch = useDispatch();
  const users = useSelector((store: IStore) => store.users.sortedUsers);
  const allUsers = useSelector((store: IStore) => store.users.allUsers);
  const search = useSelector((store: IStore) => store.users.search);

  const onChangeHandler = (e: any) => {
    const val = e.target.value;

    dispatch(setUsersSearch(val));
  };

  useEffect(() => {
    const newUsers = allUsers.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    dispatch(setSortedUsers(newUsers));
  }, [search, allUsers, dispatch]);

  return (
    <Wrap>
      <SearchInput
        type='text'
        placeholder='Search'
        onChange={onChangeHandler}
        value={search ?? ""}
      />
      <UserTable users={users} />
    </Wrap>
  );
}

// export const dashboardLoader = async () => {
//   const token = getItem("token");
//   if (!token) return redirect(APP_ROUTES.LOGIN);

//   const payload: JWTPayload = jwt(token);
//   let [user, companiesCatalog] = await Promise.all([
//     UsersService.getUser(+payload.sub),
//     CatalogService.getFullCatalog(),
//   ]);

//   if (!user.id) return null;

//   store.dispatch(setUser(user));
//   store.dispatch(setCatalog(companiesCatalog));

//   return user;
// };
