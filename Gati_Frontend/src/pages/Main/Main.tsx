import BoardList from "@components/Board/BoardList";
import Carousel from "@components/Main/Carousel";
import Category from "@components/Main/Category";
import ContainerTemplate from "@components/Container";

import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const nav = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <ContainerTemplate>
        <Carousel />
        <Category selected={selectedCategory} onSelect={setSelectedCategory} />
        <BoardList category={selectedCategory} />

        <button
          className="fixed z-10 bottom-32 right-8 bg-main text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-2xl"
          aria-label="글쓰기"
          onClick={() => nav("/create")}
        >
          <FaPlus />
        </button>
      </ContainerTemplate>
    </>
  );
};

export default Main;
