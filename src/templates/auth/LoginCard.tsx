import Button from "../../components/Button"
import Container from "../../components/Container"
import TextField from "../../components/grouped_components/TextField"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Label from "../../components/Label"
import Link from "../../components/Link"

const LoginCard = () => {
  return (
    <>
      <Container class="p-10 bg-white rounded-md shadow-lg w-3/12">
        <Header class="font-extrabold text-2xl text-gray-600">Sign in your account</Header>
        
        <Container class="mt-10 space-y-5">
          <TextField label="Username" inputType="text" placeHolder="text" />
          <TextField label="Password" inputType="password" placeHolder="password" />
        </Container>

        <Container class="mt-4 flex items-center justify-between">
          <Container class="flex items-start">
            <Container class="flex items-center h-5"></Container>
            <Input type="checkbox" ariaDescribedby="remember" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-900" />
            <Label class="ml-3 text-sm text-gray-500">Remember me</Label>
          </Container>

          <Link href="https://google.com/" class="text-sm font-medium text-blue-600">Forgot Password</Link>
        </Container>

        <Button class="mt-10 bg-blue-600 rounded-md text-white font-medium w-full py-2 active:bg-opacity-65" onClick={() => {}}>Sign in</Button>
      </Container>
    </>
  )
}

export default LoginCard
