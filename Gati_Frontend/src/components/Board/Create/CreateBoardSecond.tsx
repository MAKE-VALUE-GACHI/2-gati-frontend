import Button from "@components/Common/Button";
import { ICreateBoardFirstProps } from "@interface/Board";
import { useCreateBoardStore } from "stores/BoardStore";

const CreateBoardSecond = ({ onNext }: ICreateBoardFirstProps) => {
  const { title, content, setField, validateStep } = useCreateBoardStore();

  const handleNext = () => {
    const validation = validateStep(1);
    if (!validation.ok) {
      alert(validation.message);
      return;
    }
    onNext();
  };

  return (
    <>
      <p className="mb-4 text-lg px-6">
        {title}! 정말 맛있겠어요. <br /> 다른 사람에게 나눔할 음식을
        소개해주세요.
      </p>

      <textarea
        placeholder="음식 설명을 작성해주세요."
        value={content}
        onChange={(e) => setField("content", e.target.value)}
        className="mb-4 mx-6 p-3 rounded h-32"
      />

      <Button text={"다음 단계로"} onClick={handleNext} />
    </>
  );
};

export default CreateBoardSecond;
