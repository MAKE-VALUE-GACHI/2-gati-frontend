import { createBoard } from "@api/APIInstance";
import CreateBoardFirst from "@components/Board/Create/CreateBoardFirst";
import CreateBoardFourth from "@components/Board/Create/CreateBoardFourth";
import CreateBoardSecond from "@components/Board/Create/CreateBoardSecond";
import CreateBoardThird from "@components/Board/Create/CreateBoardThird";
import ContainerTemplate from "@components/Container";
import { ICreateBoard } from "@interface/Board";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBoardStore } from "stores/BoardStore";

const CreateBoard = () => {
  const nav = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { title, category, content, type, price, image, validateStep, reset } =
    useCreateBoardStore();

  const handleNext = () => setCurrentStep((prev) => prev + 1);

  const handleSubmit = async () => {
    // 최종 제출 로직
    const fd = new FormData();
    fd.append("title", title);
    fd.append("category", category);
    fd.append("content", content);
    fd.append("type", type);
    fd.append("status", "AVAILABLE");
    if (type === "TRADE") fd.append("price", String(price));
    if (image) fd.append("image", image);

    try {
      fd.forEach((value, key) => {
        console.log(key, value);
      });

      await createBoard(fd);
      reset(); // 성공시 폼 리셋
      nav("/");
      // 성공 처리
    } catch (error) {
      alert("서비스 중에 에러가 생겼습니다! 다시 시도해주세요");
      console.error(error);
    }
  };

  return (
    <ContainerTemplate>
      <h1 className="font-beanpole text-3xl px-6 pt-4 mt-4">음식 등록</h1>

      {currentStep === 1 && <CreateBoardFirst onNext={handleNext} />}
      {currentStep === 2 && <CreateBoardSecond onNext={handleNext} />}
      {currentStep === 3 && <CreateBoardThird onNext={handleNext} />}
      {currentStep === 4 && <CreateBoardFourth onSubmit={handleSubmit} />}
    </ContainerTemplate>
  );
};

export default CreateBoard;
