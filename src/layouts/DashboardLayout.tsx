import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/ui/Sidebar";

export default function DashboardLayout() {
  return (
    <Wrap>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
`;

const OutletWrapper = styled.section`
  background-color: var(--bg-secondary);
  width: 100%;
  padding: 2rem;
`;
