import { IContainer } from "@interface/Common";
import Header from "@components/Common/TheHeader";

const Container = ({ children }: IContainer) => {
  return (
    <main className="h-full pt-16">
      <Header />
      <div className="flex flex-col gap-12 mx-auto">{children}</div>
    </main>
  );
};

export default Container;
