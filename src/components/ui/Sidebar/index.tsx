// import { ContentContainer } from "./styled";
// import { Wrap } from "./styled";
import { Aside, Li, Ul } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { removeItem } from "src/utils/local-storage";
import { useDispatch } from "react-redux";
// import { resetUser } from "src/store/actions";
import { APP_ROUTES } from "../../../utils/constants";
import React from "react";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onActivateTab = () => {
    // removeItem("token");
    // dispatch(resetUser());
    // navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  return (
    <Aside>
      <Ul>
        <Li
          className={
            location.pathname === `/dashboard/${APP_ROUTES.LOTS}`
              ? "active"
              : ""
          }
          onClick={() => navigate(APP_ROUTES.LOTS)}
        >
          All Lots
        </Li>
        <Li
          className={
            location.pathname === `/dashboard/${APP_ROUTES.MY_LOTS}`
              ? "active"
              : ""
          }
          onClick={() => navigate(APP_ROUTES.MY_LOTS)}
        >
          My Lots
        </Li>
        <Li
          className={
            location.pathname === `/dashboard/${APP_ROUTES.LIVE_LOTS}`
              ? "active"
              : ""
          }
          onClick={() => navigate(APP_ROUTES.LIVE_LOTS)}
        >
          Live Lots
        </Li>
        <Li
          className={
            location.pathname === `/dashboard/${APP_ROUTES.TOP_USERS}`
              ? "active"
              : ""
          }
          onClick={() => navigate(APP_ROUTES.TOP_USERS)}
        >
          Top Users
        </Li>
      </Ul>
    </Aside>
  );
}
