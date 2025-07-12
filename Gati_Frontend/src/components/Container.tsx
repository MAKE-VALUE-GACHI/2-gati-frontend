import { IContainer } from "@interface/Common";
import Header from "@components/Common/TheHeader";
import Footer from "./Common/TheFooter";

const ContainerTemplate = ({ children }: IContainer) => {
  return (
    <main className="h-full p-8">
      <Header />
      <div className="flex flex-col gap-8 mx-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default ContainerTemplate;
