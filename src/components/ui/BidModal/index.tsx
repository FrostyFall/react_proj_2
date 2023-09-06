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
}

export default function BidModal(props: Props) {
  const MIN_ADDITION = 10; //потом передавать это через пропсы
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ auctionBid: number }>();

  function onSubmit() {
    console.log("cock");

    reset({ auctionBid: MIN_ADDITION });
    props.setModalActive(false);
  }

  return (
    <Wrapper
      $isActive={props.isActive}
      onClick={() => {
        reset({ auctionBid: MIN_ADDITION });
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
            defaultValue={MIN_ADDITION}
            {...register("auctionBid", {
              required: { value: true, message: "Enter a field" },
              min: {
                value: MIN_ADDITION,
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
            autoComplete="off"
          />
          <ErrorText>{errors.auctionBid?.message}</ErrorText>
          <BidButton type="submit">Bid</BidButton>
        </ModalForm>
      </Container>
    </Wrapper>
  );
}
