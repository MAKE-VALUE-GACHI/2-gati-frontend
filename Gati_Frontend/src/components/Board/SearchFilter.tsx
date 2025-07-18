import { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const sortOptions = ["추천순", "최신순", "별점순"];

const SearchFilter = () => {
  const [exclude, setExclude] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("추천순"); // 디폴트

  return (
    <div className="flex justify-between items-center px-6 py-1 rounded">
      {/* 정렬 필터 */}
      <div className="flex gap-2">
        {sortOptions.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedSort(type)}
            className={`px-4 py-1 rounded-full transition text-sm ${
              selectedSort === type
                ? "bg-main text-white font-semibold"
                : "bg-gray-100 text-gray-600"
            }`}
          >
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
