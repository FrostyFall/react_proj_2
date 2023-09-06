import React, { useState } from "react";
import { BidButton, Container, TextField, Wrapper } from "./styled";
import { useParams } from "react-router-dom";
import BidModal from "../BidModal";

export default function LotInfo() {
  const [isModalActive, setModalActive] = useState<Boolean>(false);

  return (
    <>
      <Wrapper
        onClick={() => {
          setModalActive(true);
        }}
      >
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
      <BidModal isActive={isModalActive} setModalActive={setModalActive} />
      {/* */}
    </>
  );
}
