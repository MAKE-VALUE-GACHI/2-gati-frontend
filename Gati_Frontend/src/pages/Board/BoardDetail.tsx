import ContainerTemplate from "@components/Container";
import { IBoard } from "@interface/Board";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import Button from "@components/Common/Button";
import Loading from "@components/Common/Loading";
import WriterReview from "@components/Review/WriterReview";

const BoardDetail = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { id } = location.state || {}; // id 값 구조분해

  const [boardDetail, setBoardDetail] = useState<IBoard | null>(null);

  useEffect(() => {
    if (!id) return;

    // 실제 상황에서는 여기서 fetch 요청을 보낼 것
    setTimeout(() => {
      setBoardDetail({ ...dummyBoardDetail, id });
    }, 300); // 로딩 느낌을 주기 위한 딜레이 (테스트용)
  }, [id]);

  if (!boardDetail) {
    return (
      <ContainerTemplate>
        <Loading />
      </ContainerTemplate>
    );
  }

  const { title, content, writer, category, date, score, price, imageURL } =
    boardDetail;

  const onClick = () => nav("/chat");

  return (
    <ContainerTemplate>
      <div className="p-6">
        <img
          src={imageURL}
          alt={title}
          className="w-full max-w-md h-[40vh] rounded-xl mb-4 object-cover"
        />
        <div className="flex items-center">
          <h1 className="py-2 text-2xl font-bold mr-4">{title}</h1>
          <span className="text-white bg-main rounded-full px-4 py-1 text-sm">
            {price === 0 ? "나눔 중" : "판매 중"}
          </span>
        </div>
        <div className="flex items-center">
          <p className="mr-4">{writer}</p>
          <p className="flex mr-2 gap-1 items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={12}
                className={
                  index < Math.floor(score || 0) ? "text-main" : "text-gray"
                }
              />
            ))}
          </p>
          <p>
            {score}점 | {date}
          </p>
        </div>

        <p className="mt-2 font-semibold text-lg">
          {price === 0 ? "무료 나눔" : `${price}원`}
        </p>

        <hr className="text-gray my-4" />

        <p className="whitespace-pre-wrap mb-4">{content}</p>

        <WriterReview />
      </div>

      {/* 나중에 작성자와 로그인된 사람이 일치하는지 확인 */}
      <Button text={"채팅 보내기"} onClick={onClick} />
    </ContainerTemplate>
  );
};

export default BoardDetail;

const dummyBoardDetail: IBoard = {
  id: 1,
  title: "수제 오이피클",
  content:
    "직접 만든 오이피클로 방부제나 첨가물이 없어서 1-2주 내로 드셔야 해요!!!\n너무너무 맛있는데 나눔하겠습니다!",
  writer: "휴간구지",
  category: "한식",
  date: "2025-06-23",
  score: 3.8,
  price: 0,
  imageURL:
    "https://recipekorea.com/data/editor/1803/c3d1e50ebb82f825af4bb82e9e3ae4db_1521542048_1337.jpg",
};
