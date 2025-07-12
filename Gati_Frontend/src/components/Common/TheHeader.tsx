import { useNavigate } from "react-router-dom";

const Header = (/* input 여부를 받아서 여기 상속 */) => {
  const nav = useNavigate();

  return (
    <div className="flex pt-2 pb-8">
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
