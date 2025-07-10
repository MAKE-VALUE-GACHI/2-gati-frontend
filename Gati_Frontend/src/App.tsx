import { Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
