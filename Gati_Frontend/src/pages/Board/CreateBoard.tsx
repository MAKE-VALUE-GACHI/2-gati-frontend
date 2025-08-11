import CreateBoardFirst from "@components/Board/Create/CreateBoardFirst";
import CreateBoardFourth from "@components/Board/Create/CreateBoardFourth";
import CreateBoardSecond from "@components/Board/Create/CreateBoardSecond";
import CreateBoardThird from "@components/Board/Create/CreateBoardThird";
import ContainerTemplate from "@components/Container";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBoardStore } from "stores/BoardStore";

const CreateBoard = () => {
  const nav = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { reset } = useCreateBoardStore();

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async () => {
    // 최종 제출 로직
    try {
      // await submitBoard(); // API 호출
      reset(); // 성공시 폼 리셋
      nav("/");
      // 성공 처리
    } catch (error) {
      // 에러 처리
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
