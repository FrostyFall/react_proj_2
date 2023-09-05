import { IUser } from "src/utils/interfaces/user.interface";

export interface IAuthState {
  user: IUser | null;
}
