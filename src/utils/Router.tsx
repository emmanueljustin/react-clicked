import { Routes, Route } from "react-router-dom";
import ServicePage from "../screens/pages/ServicePage";
import HomePage from "../screens/pages/HomePage";
import FAQPage from "../screens/pages/FAQPage";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginRoute from "./LoginRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route element={<ProtectedRoutes />}>
          {/* Contains all of the protected routes under auth */}
          
        </Route>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  )
}

export default Router