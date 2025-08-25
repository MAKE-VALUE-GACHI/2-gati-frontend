export interface ICarouselItem {
  id: number;
  imageUrl: string;
  content: string;
  title: string;
  nickname: string;
  // location: string;
}

export interface IBoard {
  id: number;
  title: string;
  nickname: string;
  content?: string;
  category?: string;
  registrationDate: string;
  status: "AVAILABLE" | "SOLD_OUT" | string;
  imageUrls: string[];
  price?: number;
  score?: number;
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

export interface ICreateBoardFirstProps {
  onNext: () => void;
}

export interface ICreateBoardLastProps {
  onSubmit: () => void;
}

export interface ICreateBoard {
  title: string;
  category: string;
  content: string;
  type: "SHARE" | "TRADE";
  status: "AVAILABLE";
  price?: number; // SHARE면 0으로 보냄
  image: File | null;
}
