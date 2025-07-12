import { useNavigate } from "react-router-dom";

const Header = (/* input 여부를 받아서 여기 상속 */) => {
  const nav = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-8 bg-white">
      <img
        src="/logo/Logo.png"
        alt="한끼하자 로고"
        className="h-8"
        onClick={() => nav("/")}
      />

      {/* {
        isInput && <input type="text" />
      } */}
    </div>
  );
};

export default Header;
