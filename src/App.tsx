import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./components/ui/NotFound";
import React from "react";
import { APP_ROUTES } from "./utils/constants";
import DashboardLayout from "./layouts/DashboardLayout";
import Lots from "./pages/Lots";
import MyLots from "./pages/MyLots";
import LiveLots from "./pages/LiveLots";
import TopUsers from "./pages/TopUsers";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Navigate to='/dashboard' />} />

        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<Navigate to={APP_ROUTES.LOTS} />} />
          <Route
            path={APP_ROUTES.LOTS}
            element={<Lots />}
            // loader={companiesLoader}
          />
          <Route
            path={APP_ROUTES.MY_LOTS}
            element={<MyLots />}
            // loader={companiesLoader}
          />
          <Route
            path={APP_ROUTES.LIVE_LOTS}
            element={<LiveLots />}
            // loader={companiesLoader}
          />
          <Route
            path={APP_ROUTES.TOP_USERS}
            element={<TopUsers />}
            // loader={companiesLoader}
          />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// createRoutesFromElements(
//   <Route path='/' element={<RootLayout />}>
//     <Route index element={<Navigate to={APP_ROUTES.CATALOG} />} />

//     <Route
//       path={APP_ROUTES.LOGIN}
//       element={<Login />}
//       loader={loginLoader}
//     />
//     <Route
//       path={APP_ROUTES.REGISTER}
//       element={<Register />}
//       loader={registerLoader}
//     />

//     <Route element={<ProtectedRoute role='user' />}>
//       <Route index element={<Navigate to={APP_ROUTES.CATALOG} />} />

//       <Route path={APP_ROUTES.CATALOG} element={<DashboardLayout />}>
//         <Route index element={<Home />} loader={dashboardLoader} />
//         <Route
//           path={`${APP_ROUTES.CATALOG}/:name`}
//           element={<Companies />}
//           loader={companiesLoader}
//         />
//         <Route
//           path={`${APP_ROUTES.CATALOG}/:name/:id`}
//           element={<Company />}
//           loader={companyLoader}
//         />
//         <Route
//           path='companies/add'
//           element={<AddCompany />}
//           loader={dashboardLoader}
//         />
//         <Route
//           path='cabinet'
//           element={<PersonalCabinet />}
//           loader={dashboardLoader}
//         />
//       </Route>
//     </Route>

//     <Route path='*' element={<NotFound />} />
//   </Route>
// )
