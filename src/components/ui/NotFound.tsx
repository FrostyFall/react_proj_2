import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../commonStyles";
import { APP_ROUTES } from "../../utils/constants";
import styled from "styled-components";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <H2>Not Found</H2>
      <Button onClick={() => navigate(APP_ROUTES.LOTS)}>Lots</Button>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
`;
const H2 = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;
`;
