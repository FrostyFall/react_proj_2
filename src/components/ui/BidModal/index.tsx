import React, { Dispatch, SetStateAction } from "react";
import {
  Container,
  ErrorText,
  Input,
  ModalForm,
  Text,
  Wrapper,
} from "./styled";
import { useForm } from "react-hook-form";
import { BidButton } from "../LotInfo/styled";

interface Props {
  isActive: Boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
  setBidPrice: Dispatch<SetStateAction<number>>;
  minBid: number;
}

export default function BidModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ auctionBid: number }>();

  function onSubmit(data: { auctionBid: number }) {
    props.setBidPrice(data.auctionBid);
    reset({ auctionBid: props.minBid });
    props.setModalActive(false);
  }

  return (
    <Wrapper
      $isActive={props.isActive}
      onClick={() => {
        reset({ auctionBid: props.minBid });
        props.setModalActive(false);
      }}
    >
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Text>How much you want to bid?(min addition)</Text>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            defaultValue={props.minBid}
            {...register("auctionBid", {
              required: { value: true, message: "Enter a field" },
              min: {
                value: props.minBid,
                message: "Must be not less than a min addition",
              },
              maxLength: {
                value: 30,
                message: "Too big number",
              },
              pattern: {
                value: /^\d+$/,
                message: "Only numbers",
              },
            })}
            autoComplete='off'
          />
          <ErrorText>{errors.auctionBid?.message}</ErrorText>
          <BidButton type='submit'>Bid</BidButton>
        </ModalForm>
      </Container>
    </Wrapper>
  );
}
