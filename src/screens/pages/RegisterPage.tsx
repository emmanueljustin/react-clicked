import Container from "../components/Container"
import RegisterCard from "../templates/auth/RegisterCard"

const RegisterPage = () => {
  return (
    <>
      <Container class="h-screen absolute flex items-center justify-center inset-0 mt-10 z-20">
        <RegisterCard />
      </Container>
    </>
  )
}

export default RegisterPage
