import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Header from "../../components/Header"
import TextField from "../../components/grouped_components/TextField"
import Dropdown from "../../components/grouped_components/Dropdown"
import Text from "../../components/Text"
import Carousel from "../../components/grouped_components/Carousel"
import { AppDispatch, RootState } from "../../../store/store"
import { useEffect, useState } from "react"
import RegisterRequest from "../../../interfaces/request/RegisterRequest"
import { createAccount } from "../../../store/authSlice"
import { EventStatus } from "../../../enums/eventStatus"
import Spinner from "../../components/Spinner"
import Form from "../../components/Form"
import { NavLink } from "react-router-dom"

const RegisterCard = () => {
  const dispatch = useDispatch<AppDispatch>() 
  const selectedItem = useSelector((state: RootState) => state.dropDown.selectedItem)
  const { status } = useSelector((state: RootState) => state.auth)

  // Set initial state before activating auto validate
  const [isInitial, setIsInitial] = useState(true)

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

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const registerform: RegisterRequest = {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender
    }

    setIsInitial(false)
    console.log(registerform)
    console.log(confirm)
    dispatch(createAccount(registerform))
  }

  return (
    <>
      <Container class="flex bg-white rounded-md w-3/4 shadow-lg mt-96 sm:mt-10">
        <Container class="p-10 w-full lg:w-1/2">
          <Form onSubmit={handleRegister}>
            <Header class="auth-form-header">Create your account</Header>
            <Container class="mt-10 space-y-4">
              <Container class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField
                  error={isInitial ? false : firstName === "" ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="First name must not be empty"
                  onChange={e => setFirstName(e.target.value)}
                  label="First Name"
                  inputType="text"
                  placeHolder="First Name"
                />
                <TextField
                  error={isInitial ? false : lastName === "" ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="Last name must not be empty"
                  onChange={e => setLastName(e.target.value)}
                  label="Last Name"
                  inputType="text"
                  placeHolder="Last Name"
                />
                <TextField
                  error={isInitial ? false : age <= 0 ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="Age must not be empty"
                  onChange={e => setAge(Number(e.target.value))}
                  label="Age"
                  inputType="number"
                  placeHolder="Age"
                />
                <Dropdown
                  label="Gender"
                  readOnly={status === EventStatus.loading ? true : false}
                  type="Gender"
                  items={['Male', 'Female']}
                />
                <TextField
                  error={isInitial ? false : username === "" ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="Username must not be empty"
                  onChange={e => setUsername(e.target.value)}
                  label="Username"
                  inputType="text"
                  placeHolder="Username"
                />
                <TextField
                  error={isInitial ? false : email === "" ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="E-mail must not be empty"
                  onChange={e => setEmail(e.target.value)}
                  label="E-mail"
                  inputType="email"
                  placeHolder="E-mail"
                />
                <TextField
                  error={isInitial ? false : password === "" ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="Password must not be empty"
                  onChange={e => setPassword(e.target.value)}
                  label="Password"
                  inputType="password"
                  placeHolder="Password"
                />
                <TextField
                  error={isInitial ? false : confirm === "" ? true : false}
                  readOnly={status === EventStatus.loading ? true : false}
                  errorMessage="Confirm password must not be empty"
                  onChange={e => setConfirm(e.target.value)}label="Confirm"
                  inputType="password"
                  placeHolder="Confirm Password"
                />
              </Container>
            </Container>

            <Button 
              class={`mt-10 ${status !== EventStatus.loading ? 'primary-btn' : 'disabled-btn flex justify-center items-center space-x-2'}`} 
              type="submit">
                <Text>{status !== EventStatus.loading ? 'Create Account'  : 'Creating Account'}</Text>
                {status === EventStatus.loading && (<Spinner />)}
            </Button>

            <Container class="flex mt-4 justify-center text-sm">
              <Text class="text-gray-600">Already have an acount?</Text>
              <NavLink to="/login" className="ml-1 font-medium text-blue-600 cursor-pointer underline">Sign in</NavLink>
            </Container>
            </Form>
          </Container>
            
        <Container class="relative hidden lg:block lg:w-1/2 overflow-hidden">
          <Carousel class="m-2 rounded-md overflow-clip" />
        </Container>
      </Container>
    </>
  )
}

export default RegisterCard
