import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users.slice";
import lotsSlice from "./slices/all-lots.slice";
import myLotsSlice from "./slices/my-lots.slice";
import liveLotsSlice from "./slices/live-lots.slice copy";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    allLots: lotsSlice.reducer,
    myLots: myLotsSlice.reducer,
    liveLots: liveLotsSlice.reducer,
  },
});

export default store;
