import { ContentContainer, SearchInput, Title } from "src/commonStyles";
import { InnerWrap, Wrap, Button } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "src/store";
// import { setCatalog, setUser } from "src/store/actions";
import UsersService from "src/utils/api/services/Users";
// import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { APP_ROUTES } from "src/utils/constants";
import LotTable from "src/components/ui/LotTable";
import { ILot } from "src/utils/interfaces/lot.interface";
import CreateLotModal from "src/components/ui/CreateLotModal";
// import CatalogService from "src/utils/api/services/Catalog";

export default function MyLots() {
  const lots: ILot[] = [
    {
      id: 0,
      authorId: 0,
      participantsIds: [],
      title: "Dick",
      price: 200,
      minBid: 100,
      startDate: new Date().toISOString(),
      lotDurationInSec: 1000,
      status: "active",
    },
    {
      id: 0,
      authorId: 0,
      participantsIds: [],
      title: "Big",
      price: 200,
      minBid: 100,
      startDate: new Date().toISOString(),
      lotDurationInSec: 1000,
      status: "waiting",
    },
  ];
  const [isModalActive, setModalActive] = useState(false);

  return (
    <>
      <Wrap>
        <InnerWrap>
          <SearchInput type="text" placeholder="Search" />
          <Button
            onClick={() => {
              setModalActive(true);
            }}
          >
            Create Lot
          </Button>
        </InnerWrap>
        <LotTable lots={lots} />
      </Wrap>
      <CreateLotModal isActive={isModalActive} setModalActive={setModalActive} />
    </>
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
