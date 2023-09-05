// import { ContentContainer } from "./styled";
// import { Wrap } from "./styled";
import { TableContent, TableHeader, TableHeading, Wrap } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { removeItem } from "src/utils/local-storage";
import { useDispatch } from "react-redux";
// import { resetUser } from "src/store/actions";
import { APP_ROUTES } from "../../../utils/constants";
import React from "react";
import { ILot } from "src/utils/interfaces/lot.interface";
import Lot from "../Lot";

interface Props {
  lots: ILot[];
}

export default function LotTable(props: Props) {
  // const dispatch = useDispatch();
  // const catalog = useSelector((store: IStore) => store.catalog.data);

  // const cards = catalog.map((card) => (
  //   <CatalogCard key={card.id} catalogCard={card} />
  // ));

  const lots = props.lots.map((lot) => <Lot key={lot.id} lot={lot} />);

  return (
    <Wrap>
      <TableHeader>
        <TableHeading $width={15}>ID</TableHeading>
        <TableHeading $width={30}>Lot Name</TableHeading>
        <TableHeading $width={20}>Price</TableHeading>
        <TableHeading $width={20}>Min Bid</TableHeading>
        <TableHeading $width={15}>Status</TableHeading>
      </TableHeader>
      <TableContent>{lots}</TableContent>
      {/* <div className='lot'></div> */}
    </Wrap>
  );
}
