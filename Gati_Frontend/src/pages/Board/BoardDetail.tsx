import ContainerTemplate from "@components/Container";
import { IBoard } from "@interface/Board";

import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Button from "@components/Common/Button";
import Loading from "@components/Common/Loading";
import WriterReview from "@components/Review/WriterReview";
import { getBoardDetail } from "@api/APIInstance";

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL.replace("/api/v1", "");

const BoardDetail = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [boardDetail, setBoardDetail] = useState<IBoard | null>(null);

  const getBoardDetailData = async (id: string) => {
    try {
      console.log(id);
      const res = await getBoardDetail(id);

      setTimeout(() => {
        setBoardDetail({ ...res.data, id: Number(id) });
      }, 300); // 로딩 느낌을 주기 위한 딜레이 (테스트용)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) return;
    getBoardDetailData(id);
  }, [id]);

  if (!boardDetail) {
    return (
      <ContainerTemplate>
        <Loading />
      </ContainerTemplate>
    );
  }

  const {
    title,
    content,
    nickname,
    registrationDate,
    imageUrls,
    status,
    score,
    // price  // 서버에 없으면 사용 안 함 (옵셔널)
  } = boardDetail;

  const first = imageUrls[0];
  const mainImage = first
    ? /^https?:\/\//i.test(first)
      ? first
      : BASE_IMAGE_URL + first
    : "";

  const onClick = () => nav("/review");

  return (
    <ContainerTemplate>
      <div className="p-6">
        {mainImage ? (
          <img
            src={mainImage}
            alt={title}
            className="w-full max-w-md h-[40vh] rounded-xl mb-4 object-cover"
          />
        ) : (
          <div className="w-full max-w-md h-[40vh] rounded-xl mb-4 bg-gray-100 grid place-items-center text-gray-400">
            이미지 없음
          </div>
        )}
        <div className="flex items-center">
          <h1 className="py-2 text-2xl font-bold mr-4">{title}</h1>
          <span className="text-white bg-main rounded-full px-4 py-1 text-sm">
            {status === "AVAILABLE" ? "나눔 중" : "판매 중"}
          </span>
        </div>
        <div className="flex items-center">
          <p className="mr-4">{nickname}</p>
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
            {score}점 | {registrationDate}
          </p>
        </div>

        {/* <p className="mt-2 font-semibold text-lg">
          {status === "AVAILABLE" ? "무료 나눔" : `${price}원`}
        </p> */}

        <hr className="text-gray my-4" />

        <p className="whitespace-pre-wrap mb-4">{content}</p>

        <WriterReview />
      </div>

      {/* 나중에 작성자와 로그인된 사람이 일치하는지 확인 */}
      <Button text={"후기 보내기"} onClick={onClick} />
    </ContainerTemplate>
  );
};

export default BoardDetail;

// const dummyBoardDetail: IBoard = {
//   id: 1,
//   title: "수제 오이피클",
//   content:
//     "직접 만든 오이피클로 방부제나 첨가물이 없어서 1-2주 내로 드셔야 해요!!!\n너무너무 맛있는데 나눔하겠습니다!",
//   writer: "휴간구지",
//   category: "한식",
//   date: "2025-06-23",
//   score: 3.8,
//   price: 0,
//   imageURL:
//     "https://recipekorea.com/data/editor/1803/c3d1e50ebb82f825af4bb82e9e3ae4db_1521542048_1337.jpg",
// };
