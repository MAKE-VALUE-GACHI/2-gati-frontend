import BoardList from "@components/Board/BoardList";
import SearchFilter from "@components/Board/SearchFilter";
import ContainerTemplate from "@components/Container";
import Category from "@components/Main/Category";
import { useState } from "react";

const SearchList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <ContainerTemplate>
      <Category selected={selectedCategory} onSelect={setSelectedCategory} />
      <SearchFilter />
      <BoardList category={selectedCategory} />
    </ContainerTemplate>
  );
};

export default SearchList;
