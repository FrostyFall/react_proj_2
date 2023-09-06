import { useEffect, useState } from "react";
import { BidButton, Container, TextField, Wrapper } from "./styled";
import BidModal from "../BidModal";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { ILot } from "src/utils/interfaces/lot.interface";
import { useDispatch } from "react-redux";
import {
  updateLiveLotPrice,
  updateLotPrice,
  updateMyLotPrice,
} from "src/store/actions";
import { APP_ROUTES } from "src/utils/constants";

export default function LotInfo() {
  const params = useParams();
  const dispatch = useDispatch();
  const data: any = useLoaderData();
  const navigate = useNavigate();
  const allLots = useSelector((store: IStore) => store.allLots.allLots);
  const myLots = useSelector((store: IStore) => store.myLots.allLots);
  const liveLots = useSelector((store: IStore) => store.liveLots.allLots);
  const [bidPrice, setBidPrice] = useState(0);
  const [isModalActive, setModalActive] = useState(false);
  const type = data.type;
  const lotId = +(params.id ?? 0);

  let lot: ILot | undefined;

  if (type === "all-lots") {
    lot = allLots.find((lot) => lot.id === lotId);
  }
  if (type === "my-lots") {
    lot = myLots.find((lot) => lot.id === lotId);
  }
  if (type === "live-lots") {
    lot = liveLots.find((lot) => lot.id === lotId);
  }

  useEffect(() => {
    if (typeof lot === "undefined") {
      navigate("/");
    }
  }, [lot, navigate]);

  useEffect(() => {
    if (lot) {
      if (type === "all-lots") {
        dispatch(
          updateLotPrice({ id: lot.id, newPrice: +lot.price + +bidPrice })
        );
      }
      if (type === "my-lots") {
        dispatch(
          updateMyLotPrice({ id: lot.id, newPrice: +lot.price + +bidPrice })
        );
      }
      if (type === "live-lots") {
        dispatch(
          updateLiveLotPrice({ id: lot.id, newPrice: +lot.price + +bidPrice })
        );
      }
    }
  }, [bidPrice]);

  return (
    <>
      <Wrapper>
        <TextField>Title: {lot?.title}</TextField>
        <Container>
          <TextField>Current Price: {lot?.price}</TextField>
          <TextField>Min Bid: {lot?.minBid}</TextField>
        </Container>
        <Container>
          <TextField>Start Date: {lot?.startDate.split("T")[0]}</TextField>
          <TextField>Duration in secs: {lot?.lotDurationInSec}</TextField>
        </Container>
        <BidButton
          onClick={(e) => {
            e.stopPropagation();
            setModalActive(true);
          }}
        >
          Bid
        </BidButton>
      </Wrapper>
      <button
        onClick={() => {
          if (type === "all-lots") {
            navigate(`../${APP_ROUTES.LOTS}`);
          }
          if (type === "my-lots") {
            navigate(`../${APP_ROUTES.MY_LOTS}`);
          }
          if (type === "live-lots") {
            navigate(`../${APP_ROUTES.LIVE_LOTS}`);
          }
        }}
      >
        Back
      </button>
      <BidModal
        minBid={lot?.minBid ?? 0}
        isActive={isModalActive}
        setModalActive={setModalActive}
        setBidPrice={setBidPrice}
      />
    </>
  );
}
