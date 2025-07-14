import ContainerTemplate from "@components/Container";
import MyProfile from "@components/MyPage/MyProfile";
import MyShareList from "@components/MyPage/MyShareList";
import { IProfile } from "@interface/User";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const MyPage = () => {
  const [profile, setProfile] = useState<IProfile>({
    name: "예흔",
    email: "efsefsfe@gmail.com",
    boards: 23,
    recievedReview: 18,
    givedReview: 35,
    score: 4.3,
  });

  return (
    <ContainerTemplate>
      <div className="flex p-6 bg-white items-center justify-between">
        <div className="flex items-center gap-8">
          <IoIosArrowBack size={18} />
          <span>마이 페이지</span>
        </div>
        <IoSettingsOutline size={18} />
      </div>

      <MyProfile profile={profile} />
      <MyShareList />
    </ContainerTemplate>
  );
};

export default MyPage;
