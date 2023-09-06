import { ContentContainer, SearchInput, Title } from "src/commonStyles";
import { Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "src/store";
// import { setCatalog, setUser } from "src/store/actions";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { APP_ROUTES } from "src/utils/constants";
import LotTable from "src/components/ui/LotTable";
import { ILot } from "src/utils/interfaces/lot.interface";
import { setLotsSearch, setSortedLots } from "src/store/actions";
import LotInfo from "src/components/ui/LotInfo";
// import CatalogService from "src/utils/api/services/Catalog";

export default function Lots() {
  const dispatch = useDispatch();
  const lots = useSelector((store: IStore) => store.allLots.sortedLots);
  const allLots = useSelector((store: IStore) => store.allLots.allLots);
  const search = useSelector((store: IStore) => store.allLots.search);

  const onChangeHandler = (e: any) => {
    const val = e.target.value;

    dispatch(setLotsSearch(val));
  };

  useEffect(() => {
    const newLots = allLots.filter((lot) =>
      lot.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setSortedLots(newLots));
  }, [search, allLots, dispatch]);

  return (
    <Wrap>
      <SearchInput
        type='text'
        placeholder='Search'
        onChange={onChangeHandler}
        value={search ?? ""}
      />
      <LotTable lots={lots} type='all' />
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
