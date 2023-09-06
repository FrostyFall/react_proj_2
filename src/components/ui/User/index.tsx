import React from "react";
import { LotField, Wrap } from "./styled";
import { IUser } from "src/utils/interfaces/user.interface";

interface Props {
  user: IUser;
}

export default function User(props: Props) {
  return (
    <Wrap>
      <LotField $width={15}>{props.user.id}</LotField>
      <LotField
        $width={70}
      >{`${props.user.firstName} ${props.user.lastName}`}</LotField>
      <LotField $width={15}>{props.user.quantity}</LotField>
    </Wrap>
  );
}
