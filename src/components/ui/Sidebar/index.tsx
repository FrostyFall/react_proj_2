import React from "react";
import { Aside, Li, Ul } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../utils/constants";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

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
