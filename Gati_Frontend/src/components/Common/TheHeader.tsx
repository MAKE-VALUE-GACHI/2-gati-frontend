import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const location = useLocation();

  const isSearchPage = location.pathname === "/search";

  return (
    <div className="fixed z-10 top-0 left-0 w-full flex justify-between p-8 bg-white">
      <img
        src="/logo/Logo.png"
        alt="한끼하자 로고"
        className="h-8"
        onClick={() => nav("/")}
      />

      {isSearchPage && (
        <div className="flex items-center px-4 py-2 rounded bg-background">
          <IoSearch className="mr-2" />
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="bg-background focus:outline-none w-full text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
