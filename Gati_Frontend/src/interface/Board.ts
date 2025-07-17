export interface ICarouselItem {
  id: number;
  imageUrl: string;
  description: string;
  title: string;
  nickname: string;
  // location: string;
}

export interface IBoard {
  id: number;
  title: string;
  nickname: string;
  content?: string;
  score?: number;
  category?: string;
  registrationDate: string;
  price?: number;
  statuc: string;
  imageUrl: string[];
}

export interface IKeywordProps {
  keyword: string;
  setKeyword: (v: string) => void;
}

export interface CategoryProps {
  onSelect: (category: string) => void;
}

export interface IBoardProps {
  board: IBoard;
}

export interface IBoardListProps {
  category: string;
  keyword: string;
}

export interface ISearchFilter {
  category?: string;
  keyword?: string;
  sort?: "recommend" | "latest" | "rating";
}
