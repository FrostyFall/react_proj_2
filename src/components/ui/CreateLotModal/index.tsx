import React, { Dispatch, SetStateAction } from "react";
import { Container, CreateButton, Input, ModalForm, Wrapper } from "./styled";
import { useForm } from "react-hook-form";
import { ErrorText } from "../BidModal/styled";

interface IProps {
  isActive: Boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}

interface IForm {
  name: string;
  startPrice: number;
  minAddition: number;
  date: string;
  duration: number;
}

export default function CreateLotModal(props: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  function onSubmit(data: IForm) {
    console.log(data);

    reset();
    props.setModalActive(false);
  }

  return (
    <>
      <Wrapper
        $isActive={props.isActive}
        onClick={() => {
          reset();
          props.setModalActive(false);
        }}
      >
        <ModalForm
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Name of lot"
            autoComplete="off"
            {...register("name", {
              required: { value: true, message: "Enter a field" },
            })}
          />
          <ErrorText>{errors.name?.message}</ErrorText>
          <Container>
            <Container>
              <Input
                placeholder="Start price"
                autoComplete="off"
                {...register("startPrice", {
                  required: { value: true, message: "Enter a field" },
                  min: {
                    value: 0,
                    message: "Must be not less than 0",
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
              />
              <ErrorText>{errors.startPrice?.message}</ErrorText>
            </Container>
            <Container>
              <Input
                placeholder="Min addition"
                autoComplete="off"
                {...register("minAddition", {
                  required: { value: true, message: "Enter a field" },
                  min: {
                    value: 0,
                    message: "Must be not less than 0",
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
              />
              <ErrorText>{errors.minAddition?.message}</ErrorText>
            </Container>
          </Container>
          <Container>
            <Container>
              <Input
                placeholder="Date of start"
                autoComplete="off"
                {...register("date", {
                  required: { value: true, message: "Enter a field" },
                  pattern: {
                    value:
                      /^(0?[1-9]|[12][0-9]|3[01])[\.](0?[1-9]|1[012])[\.]\d{4}$/,
                    message: "Format dd.mm.yyyy",
                  },
                })}
              />
              <ErrorText>{errors.date?.message}</ErrorText>
            </Container>
            <Container>
              <Input
                placeholder="Lot duration in seconds"
                autoComplete="off"
                type="number"
                {...register("duration", {
                  required: { value: true, message: "Enter a field" },
                  min: {
                    value: 10,
                    message: "Must be not less than 10",
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
              />
              <ErrorText>{errors.duration?.message}</ErrorText>
            </Container>
          </Container>
          <CreateButton type="submit">Create lot</CreateButton>
        </ModalForm>
      </Wrapper>
    </>
  );
}
