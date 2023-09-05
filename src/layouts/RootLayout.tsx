import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../globalStyles";
import { Provider } from "react-redux";
import store from "../store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Outlet />
    </Provider>
  );
}
