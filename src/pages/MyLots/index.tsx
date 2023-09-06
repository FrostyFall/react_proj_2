import { SearchInput } from "src/commonStyles";
import { InnerWrap, Wrap, Button } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LotTable from "src/components/ui/LotTable";
import CreateLotModal from "src/components/ui/CreateLotModal";
import { setMyLotsSearch, setSortedMyLots } from "src/store/actions";

export default function MyLots() {
  const dispatch = useDispatch();
  const lots = useSelector((store: IStore) => store.myLots.sortedLots);
  const allLots = useSelector((store: IStore) => store.myLots.allLots);
  const search = useSelector((store: IStore) => store.myLots.search);
  const [isModalActive, setModalActive] = useState(false);

  const onChangeHandler = (e: any) => {
    const val = e.target.value;

    dispatch(setMyLotsSearch(val));
  };

  useEffect(() => {
    const newLots = allLots.filter((lot) =>
      lot.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setSortedMyLots(newLots));
  }, [search, allLots, dispatch]);

  return (
    <>
      <Wrap>
        <InnerWrap>
          <SearchInput
            type='text'
            placeholder='Search'
            onChange={onChangeHandler}
            value={search ?? ""}
          />
          <Button
            onClick={() => {
              setModalActive(true);
            }}
          >
            Create Lot
          </Button>
        </InnerWrap>
        <LotTable lots={lots} type='my' />
      </Wrap>
      <CreateLotModal
        isActive={isModalActive}
        setModalActive={setModalActive}
      />
    </>
  );
}
