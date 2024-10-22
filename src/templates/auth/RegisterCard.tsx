import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import Container from "../../components/Container"
import { formToggle } from "../../store/formSwitchSlice"
import Header from "../../components/Header"
import TextField from "../../components/grouped_components/TextField"
import Dropdown from "../../components/grouped_components/Dropdown"
import Text from "../../components/Text"
import Carousel from "../../components/grouped_components/Carousel"
import { RootState } from "../../store/store"
import { useEffect, useState } from "react"
import RegisterRequest from "../../interfaces/request/RegisterRequest"
import { register } from "../../store/authSlice"

const RegisterCard = () => {
  const dispatch = useDispatch()
  const selectedItem = useSelector((state: RootState) => state.dropDown.selectedItem)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  useEffect(() => {
    setGender(selectedItem)
  }, [selectedItem])

  return (
    <>
      <Container class="flex bg-white rounded-md w-3/4 shadow-lg mt-10">
        <Container class="p-10 w-full lg:w-1/2">
          <Header class="auth-form-header">Create your account</Header>

          <Container class="mt-10 space-y-4">
            <Container class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField onChange={e => setFirstName(e.target.value)} label="First Name" inputType="text" placeHolder="First Name" />
              <TextField onChange={e => setLastName(e.target.value)} label="Last Name" inputType="text" placeHolder="Last Name" />
              <TextField onChange={e => setAge(Number(e.target.value))} label="Age" inputType="number" placeHolder="Age" />
              <Dropdown label="Gender" type="Gender" items={['Male', 'Female']} />
              <TextField onChange={e => setUsername(e.target.value)} label="Username" inputType="text" placeHolder="Username" />
              <TextField onChange={e => setEmail(e.target.value)} label="E-mail" inputType="email" placeHolder="E-mail" />
              <TextField onChange={e => setPassword(e.target.value)} label="Password" inputType="password" placeHolder="Password" />
              <TextField onChange={e => setConfirm(e.target.value)}label="Confirm" inputType="password" placeHolder="Confirm Password" />
            </Container>
          </Container>

          <Button class="mt-10 primary-btn" onClick={() => {
            const registerform: RegisterRequest = {
              username: username,
              password: password,
              email: email,
              firstName: firstName,
              lastName: lastName,
              age: age,
              gender: gender
            }

            console.log(confirm)
            dispatch(register(registerform))
          }}>
            Create Account
          </Button>
          <Container class="flex mt-4 justify-center text-sm">
            <Text class="text-gray-600">Already have an acount?</Text>
            <Button onClick={() => {dispatch(formToggle({selectedForm: 'login'}))}} class="ml-1 font-medium text-blue-600 cursor-pointer underline">Sign in</Button>
          </Container>
        </Container>
        <Container class="relative hidden lg:block lg:w-1/2 overflow-hidden">
          <Carousel class="m-2 rounded-md overflow-clip" />
          {/* <Image class="w-full h-full object-cover rounded-md" imgSrc={adImg} alt="" /> */}
        </Container>
      </Container>
    </>
  )
}

export default RegisterCard
