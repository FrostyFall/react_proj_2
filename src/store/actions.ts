import lotsSlice from "./slices/all-lots.slice";
import liveLotsSlice from "./slices/live-lots.slice copy";
import myLotsSlice from "./slices/my-lots.slice";
import usersSlice from "./slices/users.slice";

export const { setSortedUsers, setUsersSearch, resetUsersSearch } =
  usersSlice.actions;

export const {
  updateLotPrice,
  addLot,
  setSortedLots,
  setLotsSearch,
  resetLotsSearch,
} = lotsSlice.actions;

export const {
  addMyLot,
  setMyLotsSearch,
  setSortedMyLots,
  resetMyLotsSearch,
  updateMyLotPrice,
} = myLotsSlice.actions;

export const {
  updateLiveLotPrice,
  addLiveLot,
  setLiveLotsSearch,
  setSortedLiveLots,
  resetLiveLotsSearch,
} = liveLotsSlice.actions;
