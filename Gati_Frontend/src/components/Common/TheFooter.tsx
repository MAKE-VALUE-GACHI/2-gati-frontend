import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="flex p-6 justify-between">
      <div className="flex flex-2 flex-col items-center justify-between gap-2">
        <GoHome className="w-8 h-8" />
        <span>홈</span>
      </div>
      <div className="flex flex-2 flex-col items-center justify-between">
        <IoIosSearch className="w-8 h-8" />
        <span>탐색</span>
      </div>
      <div className="flex flex-2 flex-col items-center justify-between">
        <IoChatbubbleOutline className="w-7 h-7" />
        <span>채팅</span>
      </div>
      <div className="flex flex-2 flex-col items-center justify-between">
        <CgProfile className="w-7 h-7" />
        <span>마이페이지</span>
      </div>
    </footer>
  );
};

export default Footer;
