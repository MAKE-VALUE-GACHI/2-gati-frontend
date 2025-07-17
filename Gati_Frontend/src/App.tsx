import { Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Main from "./pages/Main/Main";
import SearchList from "@pages/Search/Search";
import MyPage from "@pages/MyPage/MyPage";
import ChatList from "@pages/Sharing/Chat";
import Setting from "@pages/MyPage/Setting";
import CreateBoard from "@pages/Board/CreateBoard";
import BoardDetail from "@pages/Board/BoardDetail";
import CreateReview from "@pages/Review/CreateReview";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/create" element={<CreateBoard />} />
        <Route path="/detail" element={<BoardDetail />} />
        <Route path="/review" element={<CreateReview />} />
      </Routes>
    </>
  );
};

export default App;
