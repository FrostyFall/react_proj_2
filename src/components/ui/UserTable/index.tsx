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
import { IUser } from "src/utils/interfaces/user.interface";
import User from "../User";

interface Props {
  users: IUser[];
}

export default function UserTable(props: Props) {
  // const dispatch = useDispatch();
  // const catalog = useSelector((store: IStore) => store.catalog.data);

  // const cards = catalog.map((card) => (
  //   <CatalogCard key={card.id} catalogCard={card} />
  // ));

  const users = props.users.map((user) => <User key={user.id} user={user} />);

  return (
    <Wrap>
      <TableHeader>
        <TableHeading $width={15}>ID</TableHeading>
        <TableHeading $width={70}>User's Full Name</TableHeading>
        <TableHeading $width={15}>Quantity</TableHeading>
      </TableHeader>
      <TableContent>{users}</TableContent>
    </Wrap>
  );
}
