import { ContentContainer, Title } from "src/commonStyles";
import { Container, Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "src/store";
import { setCatalog, setUser } from "src/store/actions";
import UsersService from "src/utils/api/services/Users";
// import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { APP_ROUTES } from "src/utils/constants";
// import CatalogService from "src/utils/api/services/Catalog";

export default function MyLots() {
  // const catalog = useSelector((store: IStore) => store.catalog.data);

  // const cards = catalog.map((card) => (
  //   <CatalogCard key={card.id} catalogCard={card} />
  // ));

  return <></>;
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
