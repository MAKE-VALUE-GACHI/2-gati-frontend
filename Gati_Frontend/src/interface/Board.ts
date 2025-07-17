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
  content?: string;
  score?: number;
  date: string;
  category: string;
  price: number;
  imageURL: string;
}

export interface IBoardProps {
  board: IBoard;
}

export interface ISearchFilter {}
