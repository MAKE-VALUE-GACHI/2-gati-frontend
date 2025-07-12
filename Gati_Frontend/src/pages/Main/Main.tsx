import BoardList from "@components/Board/BoardList";
import Carousel from "@components/Main/Carousel";
import Category from "@components/Main/Category";
import ContainerTemplate from "@components/Container";

const Main = () => {
  return (
    <>
      <ContainerTemplate>
        <Carousel />
        <Category />
        <BoardList />
      </ContainerTemplate>
    </>
  );
};

export default Main;
