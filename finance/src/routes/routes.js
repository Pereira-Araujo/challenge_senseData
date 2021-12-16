import {  Routes, Route,HashRouter  } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage"

const PagesPaths = () => {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
export default PagesPaths;
