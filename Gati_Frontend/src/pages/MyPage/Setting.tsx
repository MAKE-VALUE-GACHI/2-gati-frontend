import ContainerTemplate from "@components/Container";

import { CgProfile } from "react-icons/cg";
import {
  IoLockClosedOutline,
  IoLogOutOutline,
  IoWarningOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import { PiNotebook } from "react-icons/pi";
import { GoChecklist, GoQuestion } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SETTINGLIST = [
  { icon: <CgProfile />, title: "개인정보 관리", route: "/myPag/profile" },
  {
    icon: <IoLockClosedOutline />,
    title: "비밀번호 변경",
    route: "/myPage/password",
  },
  {
    icon: <HiOutlineBell />,
    title: "알림 설정",
    route: "/myPage/notification",
  },
  { icon: <PiNotebook />, title: "거래 기록", route: "/myPage/history" },
  {
    icon: <GoChecklist />,
    title: "거래 체크리스트 관리",
    route: "/myPage/checklist",
  },
  { icon: <GoQuestion />, title: "고객 센터", route: "/support" },
  { icon: <IoLogOutOutline />, title: "로그아웃", route: "/login" },
  { icon: <IoWarningOutline />, title: "회원탈퇴", route: "/login" },
];

const Setting = () => {
  const nav = useNavigate();

  return (
    <ContainerTemplate>
      <div className="flex p-6 bg-white items-center justify-between">
        <div className="flex items-center gap-8">
          <IoIosArrowBack size={18} onClick={() => nav("/myPage")} />
          <span>내 설정</span>
        </div>
      </div>

      <div>
        {SETTINGLIST.map(({ icon, title, route }) => (
          <div
            className="flex items-center mx-6 my-4 p-4 gap-4 bg-white"
            onClick={() => nav(route)}
          >
            <span className="text-xl">{icon}</span>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </ContainerTemplate>
  );
};

export default Setting;
