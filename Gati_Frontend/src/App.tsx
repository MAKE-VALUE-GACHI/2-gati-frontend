import { Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Main from "./pages/Main/Main";
import SearchList from "@pages/Search/Search";
import MyPage from "@pages/MyPage/MyPage";
import ChatList from "@pages/Sharing/Chat";
import Setting from "@pages/MyPage/Setting";

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
      </Routes>
    </>
  );
};

export default App;
