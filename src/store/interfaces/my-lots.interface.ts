import { ILot } from "src/utils/interfaces/lot.interface";

export interface IMyLotsState {
  allLots: ILot[];
  sortedLots: ILot[];
  search: string;
}
