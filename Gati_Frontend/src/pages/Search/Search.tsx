import BoardList from "@components/Board/BoardList";
import SearchFilter from "@components/Board/SearchFilter";
import ContainerTemplate from "@components/Container";
import Category from "@components/Main/Category";

const SearchList = () => {
  return (
    <ContainerTemplate>
      <Category />
      <SearchFilter />
      <BoardList />
    </ContainerTemplate>
  );
};

export default SearchList;
