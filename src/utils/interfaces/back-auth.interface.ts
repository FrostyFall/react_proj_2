import { IUser } from "./user.interface";

export interface IBackAuth {
  accessToken: string;
  user: IUser;
}
