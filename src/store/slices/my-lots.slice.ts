import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILot } from "src/utils/interfaces/lot.interface";
import { IAllLotsState } from "../interfaces/all-lots.interface";

const allLots: ILot[] = [
  {
    id: 0,
    authorId: 0,
    participantsIds: [],
    title: "Car",
    price: 200,
    minBid: 100,
    startDate: new Date().toISOString(),
    lotDurationInSec: 1000,
    status: "active",
  },
  {
    id: 1,
    authorId: 0,
    participantsIds: [],
    title: "House",
    price: 350,
    minBid: 50,
    startDate: new Date().toISOString(),
    lotDurationInSec: 1000,
    status: "waiting",
  },
];

const InitialState: IAllLotsState = {
  allLots,
  sortedLots: [...allLots],
  search: "",
};

export const myLotsSlice = createSlice({
  name: "my-lots",
  initialState: InitialState,
  reducers: {
    updateMyLotPrice: (
      state,
      { payload }: PayloadAction<{ id: number; newPrice: number }>
    ) => {
      state.allLots = state.allLots.map((lot) => {
        if (lot.id === payload.id) {
          const newLot = { ...lot };
          newLot.price = payload.newPrice;
          return newLot;
        }
        return lot;
      });
      state.sortedLots = state.sortedLots.map((lot) => {
        if (lot.id === payload.id) {
          const newLot = { ...lot };
          newLot.price = payload.newPrice;
          return newLot;
        }
        return lot;
      });
    },
    addMyLot: (state, { payload }: PayloadAction<ILot>) => {
      state.allLots = [...state.allLots, payload];
      state.sortedLots = [...state.sortedLots, payload];
    },
    setSortedMyLots: (state, { payload }: PayloadAction<ILot[]>) => {
      state.sortedLots = payload;
    },
    setMyLotsSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    resetMyLotsSearch: (state) => {
      state.search = "";
    },
  },
});

export default myLotsSlice;
