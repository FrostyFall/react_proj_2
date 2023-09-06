import { IUser } from "src/utils/interfaces/user.interface";

export interface IUsersState {
  authUser: IUser;
  allUsers: IUser[];
  sortedUsers: IUser[];
  search: string;
}
