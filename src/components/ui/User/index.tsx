// import { ContentContainer } from "./styled";
// import { Wrap } from "./styled";
import { LotField, Wrap } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { removeItem } from "src/utils/local-storage";
import { useDispatch } from "react-redux";
// import { resetUser } from "src/store/actions";
import { APP_ROUTES } from "../../../utils/constants";
import React from "react";
import { ILot } from "src/utils/interfaces/lot.interface";
import { IUser } from "src/utils/interfaces/user.interface";

interface Props {
  user: IUser;
}

export default function User(props: Props) {
  // const dispatch = useDispatch();
  // const catalog = useSelector((store: IStore) => store.catalog.data);

  // const cards = catalog.map((card) => (
  //   <CatalogCard key={card.id} catalogCard={card} />
  // ));

  // const lots = props.lots.map((lot) => <Lot key={lot.id} />);

  return (
    <Wrap>
      <LotField $width={15}>{props.user.id}</LotField>
      <LotField
        $width={70}
      >{`${props.user.firstName} ${props.user.lastName}`}</LotField>
      <LotField $width={15}>{props.user.quantity}</LotField>
    </Wrap>
  );
}
