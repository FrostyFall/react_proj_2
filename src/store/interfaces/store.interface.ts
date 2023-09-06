import { IAllLotsState } from "./all-lots.interface";
import { ILiveLotsState } from "./live-lots.interface";
import { IMyLotsState } from "./my-lots.interface";
import { IUsersState } from "./users.interface";

export interface IStore {
  users: IUsersState;
  allLots: IAllLotsState;
  myLots: IMyLotsState;
  liveLots: ILiveLotsState;
}
