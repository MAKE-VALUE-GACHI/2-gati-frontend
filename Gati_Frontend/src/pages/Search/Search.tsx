import BoardList from "@components/Board/BoardList";
import SearchFilter from "@components/Board/SearchFilter";
import ContainerTemplate from "@components/Container";
import Category from "@components/Main/Category";
import { useState } from "react";

const SearchList = () => {
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <ContainerTemplate keyword={keyword} setKeyword={setKeyword}>
      <Category onSelect={setCategory} />
      <SearchFilter />
      <BoardList category={category} keyword={keyword} />
    </ContainerTemplate>
  );
};

export default SearchList;
