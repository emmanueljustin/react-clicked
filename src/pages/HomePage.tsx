import Container from "../components/Container"
import Header from "../components/Header"
import LandingPage from "../templates/homepage/LandingPage"
import Text from "../components/Text"

function HomePage() {
  return (
    <>
      <LandingPage />
      <Container id="info" class="w-full px-10 mx-auto mb-20">
        <Header class="flex font-bold text-[35px] mt-32">
          Plan Your Trip With Us
        </Header>
        <Container class="flex flex-wrap mt-10">
          <Container class="rounded-md bg-white shadow-lg cursor-pointer w-80">
            <Container class="p-5">
              <Header class="font-bold text-xl text-blue-400">Summit Climbing</Header>
              <Text class="font-semibold text-base mt-5">Experience the thrill of adventure with Summit Climbing! Whether you're a seasoned climber or a curious beginner, our expert-guided trips offer an unforgettable journey to breathtaking peaks. Immerse yourself in nature as you conquer challenging routes, surrounded by stunning landscapes and invigorating fresh air.</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default HomePage
