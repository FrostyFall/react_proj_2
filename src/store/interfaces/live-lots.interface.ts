import { ILot } from "src/utils/interfaces/lot.interface";

export interface ILiveLotsState {
  allLots: ILot[];
  sortedLots: ILot[];
  search: string;
}
