import { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const SearchFilter = () => {
  const [exclude, setExclude] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center px-6 py-1 rounded">
      <div className="flex gap-2">
        {["추천순", "최신순", "별점순"].map((type) => (
          <button key={type} className={`px-4 rounded-full transition`}>
            {type}
          </button>
        ))}
      </div>

      {/* 우측 옵션: 나눔 완료 제외 */}
      <div
        onClick={() => setExclude(!exclude)}
        className="flex items-center gap-2 text-sm text-gray"
      >
        {exclude ? (
          <FaCheckCircle size={16} className="text-main" />
        ) : (
          <FaRegCircle size={16} />
        )}
        <span>나눔 완료 제외</span>
      </div>
    </div>
  );
};

export default SearchFilter;
