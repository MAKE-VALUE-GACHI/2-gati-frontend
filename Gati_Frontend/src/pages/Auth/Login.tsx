import Button from "@components/Common/Button";
import Header from "@components/Common/TheHeader";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onClick = () => {
    if (!validateEmail(email)) {
      setError("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    setError("");
    nav("/");
  };

  return (
    <div className="flex flex-col">
      <Header />

      <h1 className="text-3xl font-bold mt-[96px] p-6">로그인</h1>
      <div className="px-6 pb-4">
        <span>한국인은 밥심이니까, </span>
        <span className="font-bold">한끼하자!</span>
      </div>
      <input
        className="mx-6 px-4 py-3 mb-4"
        type="text"
        value={email}
        placeholder="이메일을 입력해주세요"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mx-6 px-4 py-3 mb-4"
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red text-sm mx-6 mb-2">{error}</p>}

      <Button text={"로그인"} onClick={onClick} />

      <hr className="my-8 mx-24 text-gray" />

      <div className="flex flex-col items-center">
        <div className="mb-4">
          <span className="mr-4">아직 계정이 없다면?</span>
          <span className="text-main font-extrabold">회원가입</span>
        </div>
        <div>
          <span className="mr-4">비밀번호를 잊었나요?</span>
          <span className="text-main font-extrabold">비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
