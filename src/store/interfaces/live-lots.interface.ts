import { ILot } from "src/utils/interfaces/lot.interface";
import { IUser } from "src/utils/interfaces/user.interface";

export interface ILiveLotsState {
  allLots: ILot[];
  sortedLots: ILot[];
  search: string;
}
