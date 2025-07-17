import { IBoard } from "@interface/Board";
import Board from "./Board";

import { useEffect, useRef, useState } from "react";

const ITEMS_PER_PAGE = 10;

const BoardList = () => {
  const [boardList, setBoardList] = useState<IBoard[]>([]);
  const [visibleList, setVisibleList] = useState<IBoard[]>([]);
  const [page, setPage] = useState(1);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBoardList(dummyBoardList);
  }, []);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [observerRef, visibleList]);

  useEffect(() => {
    const nextItems = boardList.slice(0, page * ITEMS_PER_PAGE);
    setVisibleList(nextItems);
  }, [page]);

  return (
    <div className="flex flex-col px-6">
      <h3 className="text-xl font-bold pb-4">오늘의 한끼 나눔</h3>
      {boardList.length === 0 ? (
        <span>게시글이 없습니다.</span>
      ) : (
        boardList.map((board, id) => <Board key={id} board={board} />)
      )}
    </div>
  );
};

export default BoardList;

//더미데이터
const dummyBoardList: IBoard[] = [
  {
    id: 1,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "한식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 2,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "한식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 3,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "양식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 4,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "양식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 5,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "양식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 6,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "분식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 7,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "디저트",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 8,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "디저트",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 9,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "디저트",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 10,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "디저트",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 11,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "식재료",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 12,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "식재료",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 13,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "식재료",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 14,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "기타",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 15,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "기타",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 16,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "기타",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
  {
    id: 17,
    title: "제목은 몇 자까지가 좋은 제목일까요?",
    writer: "작성자",
    date: "2025.07.12",
    category: "양식",
    price: 0,
    imageURL:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
  },
];
