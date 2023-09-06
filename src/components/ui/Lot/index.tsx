import React from "react";
import { LotField, Wrap } from "./styled";
import { useNavigate } from "react-router-dom";
import { ILot } from "src/utils/interfaces/lot.interface";

interface Props {
  lot: ILot;
}

export default function Lot(props: Props) {
  const navigate = useNavigate();

  return (
    <Wrap onClick={() => navigate(`${props.lot.id}`)}>
      <LotField $width={15}>{props.lot.id}</LotField>
      <LotField $width={30}>{props.lot.title}</LotField>
      <LotField $width={20}>{props.lot.price}</LotField>
      <LotField $width={20}>{props.lot.minBid}</LotField>
      <LotField $width={15}>{props.lot.status}</LotField>
    </Wrap>
  );
}
