import { IContainer } from "@interface/Common";
import Header from "@components/Common/TheHeader";
import Footer from "./Common/TheFooter";

const ContainerTemplate = ({ children }: IContainer) => {
  return (
    <main className="h-full">
      <Header />
      <div className="flex flex-col gap-8 mx-auto pt-24">{children}</div>
      <Footer />
    </main>
  );
};

export default ContainerTemplate;
