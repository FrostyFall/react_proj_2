import React, { Dispatch, SetStateAction } from "react";
import { Container, CreateButton, Input, ModalForm, Wrapper } from "./styled";
import { useForm } from "react-hook-form";
import { ErrorText } from "../BidModal/styled";
import { ILot } from "src/utils/interfaces/lot.interface";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { useDispatch } from "react-redux";
import { addLiveLot, addLot, addMyLot } from "src/store/actions";

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
  const myLots = useSelector((store: IStore) => store.myLots.allLots);
  const dispatch = useDispatch();

  function onSubmit(data: IForm) {
    const lastId = myLots[myLots.length - 1].id + 1;
    const [day, month, year] = data.date.split(".");
    const currentSecs = Date.now() / 1000;
    const startSecs = new Date(+year, +month - 1, +day).getTime() / 1000;
    const endSecs = +startSecs + +data.duration;
    let status = "done";

    if (currentSecs >= startSecs && currentSecs < endSecs) {
      status = "active";
    } else if (currentSecs < startSecs) {
      status = "waiting";
    }

    const lot: ILot = {
      id: lastId,
      authorId: 0,
      participantsIds: [],
      title: data.name,
      price: data.startPrice,
      minBid: data.minAddition,
      startDate: new Date(+year, +month - 1, +day).toISOString(),
      lotDurationInSec: data.duration,
      status,
    };

    dispatch(addLot(lot));
    dispatch(addMyLot(lot));
    if (lot.status === "active") {
      dispatch(addLiveLot(lot));
    }

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
            placeholder='Name of lot'
            autoComplete='off'
            {...register("name", {
              required: { value: true, message: "Enter a field" },
            })}
          />
          <ErrorText>{errors.name?.message}</ErrorText>
          <Container>
            <Container>
              <Input
                placeholder='Start price'
                autoComplete='off'
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
                placeholder='Min addition'
                autoComplete='off'
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
                placeholder='Date of start (dd.mm.yyyy)'
                autoComplete='off'
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
                placeholder='Lot duration in seconds'
                autoComplete='off'
                type='number'
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
          <CreateButton type='submit'>Create lot</CreateButton>
        </ModalForm>
      </Wrapper>
    </>
  );
}
