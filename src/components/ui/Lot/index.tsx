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

interface Props {
  lot: ILot;
}

export default function Lot(props: Props) {
  // const dispatch = useDispatch();
  // const catalog = useSelector((store: IStore) => store.catalog.data);

  // const cards = catalog.map((card) => (
  //   <CatalogCard key={card.id} catalogCard={card} />
  // ));

  // const lots = props.lots.map((lot) => <Lot key={lot.id} />);
  return (
    <Wrap>
        <LotField $width={15}>{props.lot.id}</LotField>
        <LotField $width={30}>{props.lot.title}</LotField>
        <LotField $width={20}>{props.lot.price}</LotField>
        <LotField $width={20}>{props.lot.minBid}</LotField>
        <LotField $width={15}>{props.lot.status}</LotField>
    </Wrap>
  );
}
