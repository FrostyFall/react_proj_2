import React from "react";
import { BidButton, Container, TextField, Wrapper } from "./styled";

export default function LotInfo() {
  return (
    <Wrapper>
      <TextField>Name of lot</TextField>
      <Container>
        <TextField>Current price</TextField>
        <TextField>Min addition</TextField>
      </Container>
      <Container>
        <TextField>Date of start</TextField>
        <TextField>Lot duration</TextField>
      </Container>
      <BidButton>Bid</BidButton>
    </Wrapper>
  );
}
