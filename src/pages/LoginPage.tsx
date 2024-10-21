import Container from "../components/Container"
import Image from "../components/Images"
import LoginCard from "../templates/auth/LoginCard"
// import place1 from "../assets/cover_images/place1.jpg"
import cover from "../assets/mountain-peak.jpg"
import Header from "../components/Header"
import Text from "../components/Text"

const LoginPage = () => {

  return (
    <>
      <Image class="absolute inset-0 w-full h-screen object-cover" imgSrc={cover} alt=""/>
      <Container class="absolute inset-0 w-full h-screen z-10 bg-gray-800 bg-opacity-70"></Container>
      <Container class="absolute inset-0 flex items-center justify-center lg:justify-between mx-10 h-screen z-20">
        <Container class="hidden lg:flex flex-col justify-center w-[50%] mx-auto">
          <Header class="font-extrabold text-white text-[50px]">Create your account</Header>
          <Text class="font-bold text-white text-[25px]">Discover amazing discounts and travel to your dream country.</Text>
        </Container>
        <Container class="flex w-full lg:w-[30%] justify-center">
          <LoginCard />
        </Container>
      </Container>
    </>
  )
}

export default LoginPage
