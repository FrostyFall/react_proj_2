// import { ContentContainer } from "./styled";
// import { Wrap } from "./styled";
import { TableContent, TableHeader, TableHeading, Wrap } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { removeItem } from "src/utils/local-storage";
import { useDispatch, useSelector } from "react-redux";
// import { resetUser } from "src/store/actions";
import { APP_ROUTES } from "../../../utils/constants";
import React, { useEffect, useState } from "react";
import { ILot } from "src/utils/interfaces/lot.interface";
import Lot from "../Lot";
import { IUser } from "src/utils/interfaces/user.interface";
import User from "../User";
import { IStore } from "src/store/interfaces/store.interface";
import { setSortedUsers } from "src/store/actions";

interface Props {
  users: IUser[];
}

export default function UserTable(props: Props) {
  const dispatch = useDispatch();
  const allUsers = useSelector((store: IStore) => store.users.allUsers);
  const [sorting, setSorting] = useState({ id: 0, name: 0, quantity: 1 });

  const users = props.users.map((user) => <User key={user.id} user={user} />);

  const nextValue = (value: number) => {
    return value <= 0 ? value + 1 : -1;
  };

  useEffect(() => {
    const allUsersCopy = [...allUsers];
    let newUsers: IUser[] = [];

    if (sorting.id === -1) {
      newUsers = allUsersCopy.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (b.id > a.id) return -1;
        return 0;
      });
    } else if (sorting.id === 1) {
      newUsers = allUsersCopy.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (b.id > a.id) return 1;
        return 0;
      });
    } else if (sorting.quantity === -1) {
      newUsers = allUsersCopy.sort((a, b) => {
        if (a.quantity > b.quantity) return 1;
        if (b.quantity > a.quantity) return -1;
        return 0;
      });
    } else if (sorting.quantity === 1) {
      newUsers = allUsersCopy.sort((a, b) => {
        if (a.quantity > b.quantity) return -1;
        if (b.quantity > a.quantity) return 1;
        return 0;
      });
    } else if (sorting.name === -1) {
      newUsers = allUsersCopy.sort((a, b) => {
        const fullNameA = `${a.firstName} ${a.lastName}`;
        const fullNameB = `${b.firstName} ${b.lastName}`;
        if (fullNameA > fullNameB) return 1;
        if (fullNameB > fullNameA) return -1;
        return 0;
      });
    } else if (sorting.name === 1) {
      newUsers = allUsersCopy.sort((a, b) => {
        const fullNameA = `${a.firstName} ${a.lastName}`;
        const fullNameB = `${b.firstName} ${b.lastName}`;
        if (fullNameA > fullNameB) return -1;
        if (fullNameB > fullNameA) return 1;
        return 0;
      });
    } else {
      newUsers = allUsersCopy;
    }

    dispatch(setSortedUsers(newUsers));
  }, [sorting, allUsers, dispatch]);

  return (
    <Wrap>
      <TableHeader>
        <TableHeading
          $active={sorting.id !== 0}
          $width={15}
          onClick={() =>
            setSorting((prevValue) => {
              return { id: nextValue(prevValue.id), name: 0, quantity: 0 };
            })
          }
        >
          ID
        </TableHeading>
        <TableHeading
          $active={sorting.name !== 0}
          $width={70}
          onClick={() =>
            setSorting((prevValue) => {
              return { name: nextValue(prevValue.name), id: 0, quantity: 0 };
            })
          }
        >
          User's Full Name
        </TableHeading>
        <TableHeading
          $active={sorting.quantity !== 0}
          $width={15}
          onClick={() =>
            setSorting((prevValue) => {
              return {
                quantity: nextValue(prevValue.quantity),
                id: 0,
                name: 0,
              };
            })
          }
        >
          Quantity
        </TableHeading>
      </TableHeader>
      <TableContent>{users}</TableContent>
    </Wrap>
  );
}
