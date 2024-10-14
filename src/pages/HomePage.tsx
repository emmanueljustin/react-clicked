import Container from "../components/Container"
import Header from "../components/Header"
import LandingPage from "../templates/homepage/LandingPage"

function HomePage() {
  return (
    <>
      <LandingPage />
      <Container class="w-max mx-auto pt-20">
        <Header class="font-bold text-2xl">Unleash Your Vision: Where Dreams Take Shape.</Header>
      </Container>
    </>
  )
}

export default HomePage
