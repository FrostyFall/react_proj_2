import { ILot } from "src/utils/interfaces/lot.interface";

export interface IAllLotsState {
  allLots: ILot[];
  sortedLots: ILot[];
  search: string;
}
