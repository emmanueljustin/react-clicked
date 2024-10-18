import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </>
  )
}

export default Router