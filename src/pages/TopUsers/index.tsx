import { ContentContainer, SearchInput, Title } from "src/commonStyles";
import { Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "src/store";
// import { setCatalog, setUser } from "src/store/actions";
import UsersService from "src/utils/api/services/Users";
// import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { APP_ROUTES } from "src/utils/constants";
import { IUser } from "src/utils/interfaces/user.interface";
import UserTable from "src/components/ui/UserTable";
// import CatalogService from "src/utils/api/services/Catalog";

export default function TopUsers() {
  const users: IUser[] = [
    {
      id: 0,
      firstName: "Dick",
      lastName: "Grayson",
      email: "cock@gmail.com",
      quantity: 1,
    },
    {
      id: 1,
      firstName: "Jane",
      lastName: "Smith",
      email: "smith@gmail.com",
      quantity: 5,
    },
  ];

  return (
    <Wrap>
      <SearchInput type='text' placeholder='Search' />
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
