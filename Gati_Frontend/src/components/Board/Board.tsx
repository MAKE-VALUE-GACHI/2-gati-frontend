import { IBoardProps } from "@interface/Board";
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL.replace("/api/v1", "");

const Board = ({ board }: IBoardProps) => {
  const nav = useNavigate();

  const { id, title, nickname, registrationDate, imageUrl } = board;

  return (
    <div
      className="flex items-center p-4 w-full max-w-full bg-white mb-2 rounded"
      onClick={() => nav("/detail", { state: { id: id } })}
    >
      <img
        src={BASE_IMAGE_URL + imageUrl}
        alt={title}
        className="w-20 h-20 object-cover rounded mr-4 flex-shrink-0"
      />
      <div className="flex flex-col justify-between gap-1 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-lg font-semibold truncate flex-1">{title}</h4>
          <span className="px-4 py-1 bg-main text-white rounded-2xl font-bold text-xs content-center whitespace-nowrap">
            나눔 중
          </span>
        </div>

        <div className="flex gap-12 text-sm text-gray">
          <span>{nickname}</span>
          <span>{registrationDate}</span>
        </div>

        {/* { ===  ? (
          <div className="text-sm font-semibold">무료 나눔</div>
        ) : (
          <div className="text-sm font-semibold">{price}원</div>
        )} */}
      </div>
    </div>
  );
};

export default Board;
