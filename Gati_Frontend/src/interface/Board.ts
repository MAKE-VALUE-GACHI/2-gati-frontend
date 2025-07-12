export interface ICarouselItem {
  id: number;
  imageURL: string;
  description: string;
  title: string;
  author: string;
  location: string;
}

export interface IBoard {
  id: number;
  title: string;
  writer: string;
  date: string;
  price: number;
  imageURL: string;
}

export interface IBoardProps {
  board: IBoard;
}

export interface ISearchFilter {}
