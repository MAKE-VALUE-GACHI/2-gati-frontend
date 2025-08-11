import Button from "@components/Common/Button";
import { ICreateBoardFirstProps } from "@interface/Board";
import { useCreateBoardStore } from "stores/BoardStore";

const CreateBoardThird = ({ onNext }: ICreateBoardFirstProps) => {
  const { title, image, imagePreview, setImage, validateStep, clearImage } =
    useCreateBoardStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleNext = () => {
    const validation = validateStep(3); // 3단계: 이미지
    if (!validation.ok) {
      alert(validation.message);
      return;
    }
    onNext();
  };

  const handleRemoveImage = () => {
    clearImage();
  };

  return (
    <>
      <p className="mb-4 text-lg px-6">
        다음으로 {title}의 사진을 올려주세요. <br /> 다른 사람들이 어떤 음식일
        지 볼 수 있게요!
      </p>

      <div className="mx-6">
        {!image ? (
          <label className="block bg-white text-main font-bold text-center py-8 rounded-lg cursor-pointer border-white border-4 border-dashed hover:bg-gray-50 transition-colors">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            사진 올리기
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG, WEBP, GIF (최대 5MB)
            </p>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="bg-white rounded-lg p-4">
            {/* 이미지 미리보기 */}
            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="미리보기"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            {/* 파일 정보 */}
            <div className="text-center mb-4">
              <p className="text-sm text-gray-700 font-medium">{image.name}</p>
              <p className="text-xs text-gray-500">
                {(image.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            {/* 버튼들 */}
            <div className="flex gap-2">
              <label className="flex-1 bg-gray-100 text-gray-700 text-center py-2 rounded cursor-pointer hover:bg-gray-200 transition-colors">
                다른 사진 선택
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <button
                onClick={handleRemoveImage}
                className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
              >
                삭제
              </button>
            </div>
          </div>
        )}
      </div>

      <Button text={"다음 단계로"} onClick={handleNext} />
    </>
  );
};

export default CreateBoardThird;
