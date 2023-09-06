import { useEffect } from "react";
import { SearchInput } from "src/commonStyles";
import { Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LotTable from "src/components/ui/LotTable";
import { setLiveLotsSearch, setSortedLiveLots } from "src/store/actions";

export default function LiveLots() {
  const dispatch = useDispatch();
  const lots = useSelector((store: IStore) => store.liveLots.sortedLots);
  const allLots = useSelector((store: IStore) => store.liveLots.allLots);
  const search = useSelector((store: IStore) => store.liveLots.search);

  const onChangeHandler = (e: any) => {
    const val = e.target.value;

    dispatch(setLiveLotsSearch(val));
  };

  useEffect(() => {
    const newLots = allLots.filter((lot) =>
      lot.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setSortedLiveLots(newLots));
  }, [search, allLots, dispatch]);

  return (
    <Wrap>
      <SearchInput
        type='text'
        placeholder='Search'
        onChange={onChangeHandler}
        value={search ?? ""}
      />
      <LotTable lots={lots} type='live' />
    </Wrap>
  );
}
