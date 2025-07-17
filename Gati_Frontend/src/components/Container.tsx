import { IContainer } from "@interface/Common";
import Header from "@components/Common/TheHeader";
import Footer from "./Common/TheFooter";
import { useState } from "react";

const ContainerTemplate = ({
  children,
  keyword = "",
  setKeyword = () => {},
}: IContainer) => {
  return (
    <main className="h-full">
      <Header keyword={keyword} setKeyword={setKeyword} />
      <div className="flex flex-col gap-4 mx-auto py-24">{children}</div>
      <Footer />
    </main>
  );
};

export default ContainerTemplate;
