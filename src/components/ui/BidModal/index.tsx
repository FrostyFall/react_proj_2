import React from "react";
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

export default function BidModal() {
  const MIN_ADDITION = 10; //потом передавать это через пропсы
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ auctionBid: number }>();

  function onSubmit() {
    console.log("cock");
  }

  return (
    <Wrapper>
      <Container>
        <Text>How much you want to bid?(min addition)</Text>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            defaultValue={MIN_ADDITION}
            {...register("auctionBid", {
              required: { value: true, message: "Enter a field" },
              min: {
                value: MIN_ADDITION,
                message: "Must be not less thsn a min addition ",
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
