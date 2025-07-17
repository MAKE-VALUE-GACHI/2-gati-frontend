import { useState } from "react";
import ContainerTemplate from "@components/Container";
import { FaStar } from "react-icons/fa";
import Button from "@components/Common/Button";

const CreateReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const boardId = 1; // 실제 상황에서는 props나 URL params 등으로 받아올 수 있음

  const handleSubmit = () => {
    const payload = {
      boardId,
      title,
      content,
      late: rating,
    };

    // 실제 POST 요청 (예: axios.post('/api/review', payload))
    console.log("제출 데이터:", payload);
  };

  return (
    <ContainerTemplate>
      <h1 className="font-beanpole text-3xl px-6 pt-4 my-4">후기 등록</h1>

      <p className="font-semibold text-lg mb-2 mx-6">
        거래의 총 별점을 매겨주세요.
      </p>
      <div className="bg-white rounded-xl p-6 mx-6">
        <div className="flex justify-center text-main text-4xl mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
            >
              <FaStar
                className={
                  (hover || rating) >= star ? "text-main" : "text-gray"
                }
              />
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400">
          클릭해서 별점을 표시해주세요.
        </p>
      </div>

      <p className="font-semibold text-lg my-2 mx-6">
        나눔받은 음식에 대한 후기를 작성해주세요.
      </p>
      <div className="bg-white rounded-xl p-6 mx-6">
        <input
          type="text"
          placeholder="후기 제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />
        <textarea
          placeholder="음식의 맛이나 거래자의 친절도는 어땠나요?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded h-28"
        />
      </div>

      <Button text={"후기 등록하기"} onClick={handleSubmit} />
    </ContainerTemplate>
  );
};

export default CreateReview;
