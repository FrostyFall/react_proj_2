import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/utils/interfaces/user.interface";
import { IUsersState } from "../interfaces/users.interface";
import { ILot } from "src/utils/interfaces/lot.interface";
import { IAllLotsState } from "../interfaces/all-lots.interface";

const allLots: ILot[] = [
  {
    id: 1,
    authorId: 0,
    participantsIds: [],
    title: "Big",
    price: 350,
    minBid: 50,
    startDate: new Date().toISOString(),
    lotDurationInSec: 1000,
    status: "active",
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
    status: "active",
  },
];

const InitialState: IAllLotsState = {
  allLots,
  sortedLots: [...allLots],
  search: "",
};

export const liveLotsSlice = createSlice({
  name: "live-lots",
  initialState: InitialState,
  reducers: {
    updateLiveLotPrice: (
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
    addLiveLot: (state, { payload }: PayloadAction<ILot>) => {
      state.allLots = [...state.allLots, payload];
      state.sortedLots = [...state.sortedLots, payload];
    },
    setSortedLiveLots: (state, { payload }: PayloadAction<ILot[]>) => {
      state.sortedLots = payload;
    },
    setLiveLotsSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    resetLiveLotsSearch: (state) => {
      state.search = "";
    },
  },
});

export default liveLotsSlice;
