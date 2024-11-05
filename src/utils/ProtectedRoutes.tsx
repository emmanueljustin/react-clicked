import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../store/store";

const ProtectedRoutes = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return token !== "" ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
