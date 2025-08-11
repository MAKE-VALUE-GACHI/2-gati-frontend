import { useCreateBoardStore } from "stores/BoardStore";
import CustomDropdown from "../DropDown";
import Button from "@components/Common/Button";
import { ICreateBoardFirstProps } from "@interface/Board";

const categoryOptions = [
  { value: "", label: "음식 종류를 선택해주세요." },
  { value: "KOREAN", label: "한식" },
  { value: "WESTERN", label: "양식" },
  { value: "SNACK", label: "분식" },
  { value: "DESSERT", label: "디저트" },
  { value: "INGREDIENT", label: "식재료" },
  { value: "ETC", label: "기타" },
];

const CreateBoardFirst = ({ onNext }: ICreateBoardFirstProps) => {
  const { title, category, setField, validateStep } = useCreateBoardStore();

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
        음식을 나눔하기로 하셨군요! <br /> 먼저, 음식의 이름과 종류를
        알려주세요.
      </p>

      <input
        type="text"
        placeholder="음식의 이름을 입력해주세요."
        value={title}
        onChange={(e) => setField("title", e.target.value)}
        className="mb-4 mx-6 p-3 rounded"
      />

      <div className="mx-6">
        <CustomDropdown
          value={category}
          onChange={(category: string) => setField("category", category)}
          options={categoryOptions}
          placeholder="음식 종류를 선택해주세요."
        />
      </div>

      <Button text={"다음 단계로"} onClick={handleNext} />
    </>
  );
};

export default CreateBoardFirst;
