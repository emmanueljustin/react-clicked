import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import LoginPage from "../screens/pages/LoginPage";

const LoginRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token)

  return token !== "" ? <Navigate to="/" /> : <LoginPage />
}

export default LoginRoute
