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
  {
    id: 2,
    authorId: 1,
    participantsIds: [],
    title: "Liver",
    price: 350,
    minBid: 100,
    startDate: new Date().toISOString(),
    lotDurationInSec: 1000,
    status: "waiting",
  },
  {
    id: 3,
    authorId: 1,
    participantsIds: [],
    title: "Dildo",
    price: 500,
    minBid: 10,
    startDate: new Date().toISOString(),
    lotDurationInSec: 1000,
    status: "active",
  },
];

const InitialState: IAllLotsState = {
  allLots,
  sortedLots: [...allLots],
  search: "",
};

export const lotsSlice = createSlice({
  name: "lots",
  initialState: InitialState,
  reducers: {
    updateLotPrice: (
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
    addLot: (state, { payload }: PayloadAction<ILot>) => {
      state.allLots = [...state.allLots, payload];
      state.sortedLots = [...state.sortedLots, payload];
    },
    setSortedLots: (state, { payload }: PayloadAction<ILot[]>) => {
      state.sortedLots = payload;
    },
    setLotsSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    resetLotsSearch: (state) => {
      state.search = "";
    },
  },
});

export default lotsSlice;
