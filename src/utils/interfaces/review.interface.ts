export interface IReview {
  id: number;
  text: string;
  score: number;
  user: {
    id: number;
    imgUrl: string;
    name: string;
  };
}
