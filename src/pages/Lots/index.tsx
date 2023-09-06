import { useEffect } from "react";
import { SearchInput } from "src/commonStyles";
import { Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LotTable from "src/components/ui/LotTable";
import { setLotsSearch, setSortedLots } from "src/store/actions";

export default function Lots() {
  const dispatch = useDispatch();
  const lots = useSelector((store: IStore) => store.allLots.sortedLots);
  const allLots = useSelector((store: IStore) => store.allLots.allLots);
  const search = useSelector((store: IStore) => store.allLots.search);

  const onChangeHandler = (e: any) => {
    const val = e.target.value;

    dispatch(setLotsSearch(val));
  };

  useEffect(() => {
    const newLots = allLots.filter((lot) =>
      lot.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setSortedLots(newLots));
  }, [search, allLots, dispatch]);

  return (
    <Wrap>
      <SearchInput
        type='text'
        placeholder='Search'
        onChange={onChangeHandler}
        value={search ?? ""}
      />
      <LotTable lots={lots} type='all' />
    </Wrap>
  );
}
