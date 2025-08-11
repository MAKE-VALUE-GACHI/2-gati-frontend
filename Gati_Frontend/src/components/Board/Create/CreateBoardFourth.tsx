import Button from "@components/Common/Button";
import { ICreateBoardLastProps } from "@interface/Board";
import { useCreateBoardStore } from "stores/BoardStore";

const CreateBoardFourth = ({ onSubmit }: ICreateBoardLastProps) => {
  const { type, price, setField, validateStep } = useCreateBoardStore();

  const setType = (newType: "SHARE" | "TRADE") => {
    setField("type", newType);
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자만 허용하고 콤마 제거 후 저장
    const value = e.target.value.replace(/,/g, "");
    const numericValue = parseInt(value) || 0;
    setField("price", numericValue);
  };

  const handleAddPrice = (amount: number) => {
    setField("price", price + amount);
  };

  const handleResetPrice = () => {
    setField("price", 0);
  };

  const handleNext = () => {
    const validation = validateStep(4);
    if (!validation.ok) {
      alert(validation.message);
      return;
    }
    onSubmit(); // 마지막 단계이므로 제출
  };

  return (
    <>
      <p className="mb-4 text-lg px-6">
        와, 정말 맛있어보여요~! <br /> 마지막으로, 음식을 나눔할 지, 거래할 지
        선택해주세요.
      </p>

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

      <Button text={"완료하기"} onClick={handleNext} />
    </>
  );
};

export default CreateBoardFourth;
