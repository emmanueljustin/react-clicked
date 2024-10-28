import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import Container from "../../components/Container"
import TextField from "../../components/grouped_components/TextField"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Label from "../../components/Label"
import Text from "../../components/Text"
import { formToggle } from "../../../store/formSwitchSlice"
import { useState } from "react"
import LoginRequest from "../../../interfaces/request/LoginRequest"
import { AppDispatch, RootState } from "../../../store/store"
import { login, toggleRemember } from "../../../store/authSlice"

const LoginCard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const remember = useSelector((state: RootState) => state.auth.rememberMe);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Container class="p-10 bg-white rounded-md shadow-lg mt-10 md:w-[60%] lg:w-[90%]">
        <Header class="auth-form-header">Sign in your account</Header>
        
        <Container class="mt-10 space-y-5">
          <TextField onChange={e => setUsername(e.target.value)} label="Username" inputType="text" placeHolder="username" />
          <TextField onChange={e => setPassword(e.target.value)} label="Password" inputType="password" placeHolder="password" />
        </Container>

        <Container class="mt-4 flex items-center justify-between">
          <Container class="flex items-start">
            <Container class="flex items-center h-5"></Container>
            <Input
              onChange={e => dispatch(toggleRemember(e.target.checked))}
              checked={remember}
              type="checkbox"
              ariaDescribedby="remember"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-900"
            />
            <Label class="ml-3 text-[12px] sm:text-sm text-gray-500">Remember me</Label>
          </Container>

          <Button onClick={() => {}} class="text-[12px] sm:text-sm font-medium text-blue-600 underline">Forgot Password</Button>
        </Container>

        <Button class="mt-5 sm:mt-10 primary-btn" onClick={() => {
          const loginForm: LoginRequest = {
            username: username,
            password: password
          }

          dispatch(login(loginForm))
        }}>Sign in</Button>

        <Container class="flex mt-4 justify-center text-[12px] sm:text-sm">
          <Text class="text-gray-600">Dont have an acount?</Text>
          <Button onClick={() => {dispatch(formToggle({selectedForm: 'register'}))}} class="ml-1 font-medium text-blue-600 cursor-pointer underline">Sign up</Button>
        </Container>
      </Container>
    </>
  )
}

export default LoginCard
