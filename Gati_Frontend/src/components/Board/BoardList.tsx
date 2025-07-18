import { IBoard } from "@interface/Board";
import Board from "./Board";

import { useEffect, useRef, useState } from "react";
// import { getBoardList } from "@api/APIInstance";

const ITEMS_PER_PAGE = 10;

const BoardList = ({ category }: { category: string }) => {
  const [boardList, setBoardList] = useState<IBoard[]>([]);
  const [visibleList, setVisibleList] = useState<IBoard[]>([]);
  const [page, setPage] = useState(1);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchProducts = async () => {
    try {
      // const result = await getBoardList({
      //   category: category, // 이 값이 반영돼야 함
      //   keyword: keyword,
      //   sort: "latest",
      // });

      setBoardList(dummyBoardList);
    } catch (err) {
      console.error("상품 목록 조회 실패:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    //   // setBoardList(dummyBoardList);
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
    title: "오늘 만든 김치전 나눠요! 아직 따뜻해요",
    writer: "푸드마마",
    date: "2025.07.12",
    category: "한식",
    price: 0,
    imageURL:
      "https://image.thebanchan.co.kr/dwmall/static_root/model_img/main/100/1000661_1_a.jpg?f=webp&q=80",
  },
  {
    id: 2,
    title: "닭볶음탕 남았어요! 2인분 정도 됩니다",
    writer: "열정쿡",
    date: "2025.07.11",
    category: "한식",
    price: 0,
    imageURL:
      "https://i.ytimg.com/vi/Md6LX8fl8oQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAMKWVeJhl2GgPqRsaIKHlPVVji-Q",
  },
  {
    id: 3,
    title: "파스타 만들었는데 너무 많아요ㅠ 나눔해요",
    writer: "혼밥러",
    date: "2025.07.11",
    category: "양식",
    price: 0,
    imageURL:
      "https://recipe1.ezmember.co.kr/cache/recipe/2023/07/05/6e6e86a811a914249a3b47e834d2dd1d1.jpg",
  },
  {
    id: 4,
    title: "베이컨 까르보나라 1인분 나눔해요",
    writer: "서면파스타녀",
    date: "2025.07.10",
    category: "양식",
    price: 0,
    imageURL:
      "https://cdn.pixabay.com/photo/2018/06/18/16/05/spaghetti-3482749_960_720.jpg",
  },
  {
    id: 5,
    title: "오이피클 오이피클~",
    writer: "파스타맛집",
    date: "2025.07.10",
    category: "식재료",
    price: 0,
    imageURL:
      "https://recipekorea.com/data/editor/1803/c3d1e50ebb82f825af4bb82e9e3ae4db_1521542048_1337.jpg",
  },
  {
    id: 6,
    title: "김밥 여섯 줄 남았어요, 금방 만든 거예요",
    writer: "주먹김밥",
    date: "2025.07.09",
    category: "분식",
    price: 0,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68Mh3ojxkU_qKn6OiQO013rfwNu-DljOjtw&s",
  },
  {
    id: 7,
    title: "초코머핀 4개 나눠요! 당 충전 하세요🍫",
    writer: "달달한인생",
    date: "2025.07.09",
    category: "디저트",
    price: 0,
    imageURL:
      "https://i.namu.wiki/i/A4TDjaIqIlWDuw4sHKu2JM9aQcg0p4eW7tMU_PVMiglpOBCugVlGU1fvOTmW0FIc-a0mApQGLLzFttadVwk6WQ.webp",
  },
  {
    id: 8,
    title: "오레오치즈케이크 나눔해요 (조각 2개)",
    writer: "케익러버",
    date: "2025.07.08",
    category: "디저트",
    price: 0,
    imageURL:
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/07/03/9fdb6c17ca2aec6e63fd61efc98b1e331.jpg",
  },
];
