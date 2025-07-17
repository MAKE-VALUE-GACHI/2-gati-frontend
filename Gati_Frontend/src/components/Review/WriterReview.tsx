import { IWriterReview } from "@interface/Review";
import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";

const WriterReview = () => {
  const [writerReviews, setWriterReviews] = useState<IWriterReview[]>([]);

  useEffect(() => {
    setWriterReviews(dummyWriterReview);
  }, []);

  return (
    <>
      <hr className="text-gray" />
      <h1 className="text-xl font-bold my-4">작성자가 받은 후기</h1>

      {writerReviews.length === 0 ? (
        <div className="text-gray text-sm">후기가 없습니다.</div>
      ) : (
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {writerReviews.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[160px] bg-white rounded-lg shadow p-4"
            >
              <img
                src={review.imageURL}
                alt="후기 이미지"
                className="w-full h-[140px] object-cover rounded-md mb-2"
              />

              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(review.score) ? "text-main" : "text-gray"
                    }`}
                  ></FaStar>
                ))}
                <span className="text-xs">{review.score}점</span>
              </div>

              <p className="text-sm text-gray-800">{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WriterReview;

const dummyWriterReview: IWriterReview[] = [
  {
    content: "맛나요",
    score: 4.0,
    imageURL:
      "https://blog.kakaocdn.net/dn/GLKhe/btsi3qmsUnf/xkS4FvrIlhYv887hhIZBS0/img.jpg",
  },
  {
    content: "맛나요",
    score: 4.0,
    imageURL:
      "https://blog.kakaocdn.net/dn/GLKhe/btsi3qmsUnf/xkS4FvrIlhYv887hhIZBS0/img.jpg",
  },
  {
    content: "맛나요",
    score: 4.0,
    imageURL:
      "https://blog.kakaocdn.net/dn/GLKhe/btsi3qmsUnf/xkS4FvrIlhYv887hhIZBS0/img.jpg",
  },
  {
    content: "맛나요",
    score: 4.0,
    imageURL:
      "https://blog.kakaocdn.net/dn/GLKhe/btsi3qmsUnf/xkS4FvrIlhYv887hhIZBS0/img.jpg",
  },
];
