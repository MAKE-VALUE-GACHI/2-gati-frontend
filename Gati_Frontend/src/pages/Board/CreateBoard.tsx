import CustomDropdown from "@components/Board/DropDown";
import Button from "@components/Common/Button";
import ContainerTemplate from "@components/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categoryOptions = [
  { value: "", label: "음식 종류를 선택해주세요." },
  { value: "KOREAN", label: "한식" },
  { value: "WESTERN", label: "양식" },
  { value: "SNACK", label: "분식" },
  { value: "DESSERT", label: "디저트" },
  { value: "INGREDIENT", label: "식재료" },
  { value: "ETC", label: "기타" },
];

const CreateBoard = () => {
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("SHARE");
  const [image, setImage] = useState<File | null>(null);

  const getHeaderText = () => {
    if (!title || !category) {
      return "먼저, 음식의 이름과 종류를 알려주세요.";
    } else if (!content) {
      return `“${title}” 정말 맛있겠어요. 나눌 음식을 소개해주세요!`;
    } else if (!image) {
      return `“${title}”의 사진을 올려주세요.`;
    } else if (!type) {
      return `마지막으로 음식을 나눔할지, 거래할지 골라주세요.`;
    } else {
      return `${title} 등록해볼까요?`;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file); // 파일 상태 저장
    }
  };

  const handleAddPrice = (amount: number) => {
    setPrice((prev) => prev + amount);
  };

  const handleResetPrice = () => {
    setPrice(0);
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 추출
    setPrice(Number(raw));
  };

  const isFormValid = !!(title && category && content && image && type);

  const onClick = () => {
    nav("/");
  };

  return (
    <ContainerTemplate>
      <h1 className="font-beanpole text-3xl px-6 pt-4 mt-4">음식 등록</h1>

      <p className="mb-4 text-lg px-6">{getHeaderText()}</p>

      <input
        type="text"
        placeholder="음식의 이름을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 mx-6 p-3 rounded"
      />

      <div className="mx-6">
        <CustomDropdown
          value={category}
          onChange={setCategory}
          options={categoryOptions}
          placeholder="음식 종류를 선택해주세요."
        />
      </div>

      <textarea
        placeholder="음식 설명을 작성해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-4 mx-6 p-3 rounded h-32"
      />

      <label className="block mx-6 bg-white text-main font-bold text-center py-3 rounded-lg cursor-pointer border-white border-4">
        사진 올리기
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
          className="hidden"
        />
        {/* 미리보기 */}
        {image && (
          <div className="flex mx-6 my-2 justify-center">
            <p className="text-sm text-gray">{image.name}</p>
          </div>
        )}
      </label>

      <div className="flex justify-center mx-6">
        {/* 나눔/거래 선택 */}
        <div className="flex gap-6">
          <button
            type="button"
            onClick={() => setType("SHARE")}
            className={`flex-1 p-3 rounded-2xl font-bold border ${
              type === "SHARE" ? "bg-main text-white" : "bg-white border-gray"
            }`}
          >
            나눔하기
          </button>
          <button
            type="button"
            onClick={() => setType("TRADE")}
            className={`flex-1 p-3 rounded-lg font-bold border ${
              type === "TRADE" ? "bg-main text-white" : "bg-white border-gray"
            }`}
          >
            거래하기
          </button>
        </div>
      </div>

      {type === "TRADE" && (
        <div className="mx-6">
          {/* 입력 필드 + 초기화 버튼 */}
          <div className="flex items-center justify-between mb-2 p-2 bg-white">
            <input
              type="text"
              value={price.toLocaleString()} // 1,000처럼 표시
              onChange={handlePriceInput}
              className="text-2xl font-bold bg-transparent focus:outline-none w-full"
              placeholder="금액 입력"
            />

            <button onClick={handleResetPrice}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* +천원, +오천원, +만원 버튼 */}
          <div className="flex gap-2">
            <button
              className="flex-1 py-3 font-medium"
              onClick={() => handleAddPrice(1000)}
            >
              + 천원
            </button>
            <button
              className="flex-1 py-3 font-medium"
              onClick={() => handleAddPrice(5000)}
            >
              + 오천원
            </button>
            <button
              className="flex-1 py-3 font-medium"
              onClick={() => handleAddPrice(10000)}
            >
              + 만원
            </button>
          </div>
        </div>
      )}

      {/* 등록 버튼: 유효성 만족 시만 표시 */}
      {isFormValid && <Button text={"등록하기"} onClick={onClick} />}
    </ContainerTemplate>
  );
};

export default CreateBoard;
