import { useEffect } from "react";
import { SearchInput } from "src/commonStyles";
import { Wrap } from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserTable from "src/components/ui/UserTable";
import { setSortedUsers, setUsersSearch } from "src/store/actions";

export default function TopUsers() {
  const dispatch = useDispatch();
  const users = useSelector((store: IStore) => store.users.sortedUsers);
  const allUsers = useSelector((store: IStore) => store.users.allUsers);
  const search = useSelector((store: IStore) => store.users.search);

  const onChangeHandler = (e: any) => {
    const val = e.target.value;

    dispatch(setUsersSearch(val));
  };

  useEffect(() => {
    const newUsers = allUsers.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    dispatch(setSortedUsers(newUsers));
  }, [search, allUsers, dispatch]);

  return (
    <Wrap>
      <SearchInput
        type='text'
        placeholder='Search'
        onChange={onChangeHandler}
        value={search ?? ""}
      />
      <UserTable users={users} />
    </Wrap>
  );
}
