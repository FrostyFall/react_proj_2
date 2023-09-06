import { TableContent, TableHeader, TableHeading, Wrap } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { ILot } from "src/utils/interfaces/lot.interface";
import Lot from "../Lot";
import { IStore } from "src/store/interfaces/store.interface";
import {
  setSortedLiveLots,
  setSortedLots,
  setSortedMyLots,
} from "src/store/actions";

interface Props {
  lots: ILot[];
  type: string;
}

export default function LotTable(props: Props) {
  const dispatch = useDispatch();
  const allLots = useSelector((store: IStore) => store.allLots.allLots);
  const myLots = useSelector((store: IStore) => store.myLots.allLots);
  const liveLots = useSelector((store: IStore) => store.liveLots.allLots);
  const [sorting, setSorting] = useState({
    id: 0,
    name: 0,
    price: 0,
    minBid: 0,
    status: 0,
  });

  const lots = props.lots.map((lot) => <Lot key={lot.id} lot={lot} />);

  const nextValue = (value: number) => {
    return value <= 0 ? value + 1 : -1;
  };

  useEffect(() => {
    let allLotsCopy: ILot[] = [];
    if (props.type === "all") {
      allLotsCopy = [...allLots];
    }
    if (props.type === "my") {
      allLotsCopy = [...myLots];
    }
    if (props.type === "live") {
      allLotsCopy = [...liveLots];
    }

    let newLots: ILot[] = [];

    if (sorting.id === -1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (b.id > a.id) return -1;
        return 0;
      });
    } else if (sorting.id === 1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (b.id > a.id) return 1;
        return 0;
      });
    } else if (sorting.name === -1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      });
    } else if (sorting.name === 1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (b.title > a.title) return 1;
        return 0;
      });
    } else if (sorting.minBid === -1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.minBid > b.minBid) return 1;
        if (b.minBid > a.minBid) return -1;
        return 0;
      });
    } else if (sorting.minBid === 1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.minBid > b.minBid) return -1;
        if (b.minBid > a.minBid) return 1;
        return 0;
      });
    } else if (sorting.price === -1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
      });
    } else if (sorting.price === 1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
      });
    } else if (sorting.status === -1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.status > b.status) return 1;
        if (b.status > a.status) return -1;
        return 0;
      });
    } else if (sorting.status === 1) {
      newLots = allLotsCopy.sort((a, b) => {
        if (a.status > b.status) return -1;
        if (b.status > a.status) return 1;
        return 0;
      });
    } else {
      newLots = allLotsCopy;
    }

    if (props.type === "all") {
      dispatch(setSortedLots(newLots));
    }
    if (props.type === "my") {
      dispatch(setSortedMyLots(newLots));
    }
    if (props.type === "live") {
      dispatch(setSortedLiveLots(newLots));
    }
  }, [sorting, dispatch, props.type, allLots, myLots, liveLots]);

  return (
    <Wrap>
      <TableHeader>
        <TableHeading
          $active={sorting.id !== 0}
          $width={15}
          onClick={() =>
            setSorting((prevValue) => {
              return {
                id: nextValue(prevValue.id),
                name: 0,
                price: 0,
                minBid: 0,
                status: 0,
              };
            })
          }
        >
          ID
        </TableHeading>
        <TableHeading
          $active={sorting.name !== 0}
          $width={30}
          onClick={() =>
            setSorting((prevValue) => {
              return {
                id: 0,
                name: nextValue(prevValue.name),
                price: 0,
                minBid: 0,
                status: 0,
              };
            })
          }
        >
          Lot Name
        </TableHeading>
        <TableHeading
          $active={sorting.price !== 0}
          $width={20}
          onClick={() =>
            setSorting((prevValue) => {
              return {
                id: 0,
                name: 0,
                price: nextValue(prevValue.price),
                minBid: 0,
                status: 0,
              };
            })
          }
        >
          Price
        </TableHeading>
        <TableHeading
          $active={sorting.minBid !== 0}
          $width={20}
          onClick={() =>
            setSorting((prevValue) => {
              return {
                id: 0,
                name: 0,
                price: 0,
                minBid: nextValue(prevValue.minBid),
                status: 0,
              };
            })
          }
        >
          Min Bid
        </TableHeading>
        <TableHeading
          $active={sorting.status !== 0}
          $width={15}
          onClick={() =>
            setSorting((prevValue) => {
              return {
                id: 0,
                name: 0,
                price: 0,
                minBid: 0,
                status: nextValue(prevValue.status),
              };
            })
          }
        >
          Status
        </TableHeading>
      </TableHeader>
      <TableContent>{lots}</TableContent>
    </Wrap>
  );
}
