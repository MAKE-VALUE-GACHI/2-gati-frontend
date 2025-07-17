import { IProfileProps } from "@interface/User";

import { FaStar, FaRegStar } from "react-icons/fa"; // 꽉 찬 별, 빈 별

const TOTAL_STARS = 5;

const MyProfile = ({ profile }: IProfileProps) => {
  const { name, email, boards, recievedReview, givedReview, score } = profile;

  const filledStars = Math.floor(score); // 예: 4.3 → 4

  return (
    <div className="flex justify-evenly my-2">
      <div>
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold mr-4">{name}</h3>
          <span className="text-sm text-gray">{email}</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(TOTAL_STARS)].map((_, index) =>
              index < filledStars ? (
                <FaStar key={index} className="text-main" />
              ) : (
                <FaRegStar key={index} className="text-main" />
              )
            )}
          </div>
          <span>{score} 점</span>
        </div>
      </div>

      <div className="flex gap-4 text-center">
        <div className="flex flex-1 flex-col">
          <span className="text-xl font-semibold">{boards}</span>
          <span className="text-xs">게시글</span>
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-xl font-semibold">{recievedReview}</span>
          <span className="text-xs">
            받은 <br /> 후기
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-xl font-semibold">{givedReview}</span>
          <span className="text-xs">작성한 후기</span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
