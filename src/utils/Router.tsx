import { Routes, Route } from "react-router-dom";
import ServicePage from "../screens/pages/ServicePage";
import HomePage from "../screens/pages/HomePage";
import FAQPage from "../screens/pages/FAQPage";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginRoute from "./LoginRoute";
import ProfilePage from "../screens/pages/authenticated/ProfilePage";
import RegisterRoute from "./RegisterRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={<RegisterRoute />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  )
}

export default Router