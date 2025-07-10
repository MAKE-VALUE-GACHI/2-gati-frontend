import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
