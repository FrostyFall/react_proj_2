import lotsSlice from "./slices/all-lots.slice";
import liveLotsSlice from "./slices/live-lots.slice copy";
import myLotsSlice from "./slices/my-lots.slice";
import usersSlice from "./slices/users.slice";

export const { setSortedUsers, setUsersSearch, resetUsersSearch } =
  usersSlice.actions;

export const { setSortedLots, setLotsSearch, resetLotsSearch } =
  lotsSlice.actions;

export const { setMyLotsSearch, setSortedMyLots, resetMyLotsSearch } =
  myLotsSlice.actions;

export const { setLiveLotsSearch, setSortedLiveLots, resetLiveLotsSearch } =
  liveLotsSlice.actions;
