import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex p-8 justify-around bg-white">
      <div className="flex flex-2 flex-col items-center justify-between gap-1 basis-1/4">
        <GoHome className="w-8 h-8" />
        <span>홈</span>
      </div>
      <div className="flex flex-2 flex-col items-center justify-between gap-1 basis-1/4">
        <IoIosSearch className="w-8 h-8" />
        <span>탐색</span>
      </div>
      <div className="flex flex-2 flex-col items-center justify-between gap-1 basis-1/4">
        <IoChatbubbleOutline className="w-7 h-7" />
        <span>채팅</span>
      </div>
      <div className="flex flex-2 flex-col items-center justify-between gap-1 basis-1/4">
        <CgProfile className="w-7 h-7" />
        <span>마이페이지</span>
      </div>
    </footer>
  );
};

export default Footer;
