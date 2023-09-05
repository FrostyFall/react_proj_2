export interface ILot {
  id: number;
  authorId: number;
  participantsIds: number[];
  title: string;
  price: number;
  minBid: number;
  startDate: string;
  lotDurationInSec: number;
}
