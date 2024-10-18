import Container from "../components/Container"
import LoginCard from "../templates/auth/LoginCard"

const LoginPage = () => {
  return (
    <>
      <Container class="flex items-center justify-center h-screen">
        <LoginCard />
      </Container>
    </>
  )
}

export default LoginPage