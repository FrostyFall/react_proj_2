import React from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./components/ui/NotFound";
import { APP_ROUTES } from "./utils/constants";
import DashboardLayout from "./layouts/DashboardLayout";
import Lots from "./pages/Lots";
import MyLots from "./pages/MyLots";
import LiveLots from "./pages/LiveLots";
import TopUsers from "./pages/TopUsers";
import LotInfo from "./components/ui/LotInfo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Navigate to='/dashboard' />} />

        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<Navigate to={APP_ROUTES.LOTS} />} />
          <Route path={APP_ROUTES.LOTS} element={<Lots />} />
          <Route
            path={APP_ROUTES.LOTS + "/:id"}
            element={<LotInfo />}
            loader={lotLoader}
          />
          <Route path={APP_ROUTES.MY_LOTS} element={<MyLots />} />
          <Route
            path={APP_ROUTES.MY_LOTS + "/:id"}
            element={<LotInfo />}
            loader={myLotLoader}
          />
          <Route path={APP_ROUTES.LIVE_LOTS} element={<LiveLots />} />
          <Route
            path={APP_ROUTES.LIVE_LOTS + "/:id"}
            element={<LotInfo />}
            loader={liveLotLoader}
          />
          <Route path={APP_ROUTES.TOP_USERS} element={<TopUsers />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

export const lotLoader = async () => {
  return { type: "all-lots" };
};
export const myLotLoader = async () => {
  return { type: "my-lots" };
};
export const liveLotLoader = async () => {
  return { type: "live-lots" };
};
