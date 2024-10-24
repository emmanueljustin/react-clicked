import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  )
}

export default Router