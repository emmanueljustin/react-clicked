import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Navigate } from "react-router-dom"
import RegisterPage from "../screens/pages/RegisterPage"

const RegisterRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token)

  return token !== "" ? <Navigate to="/" /> : <RegisterPage />
}

export default RegisterRoute
