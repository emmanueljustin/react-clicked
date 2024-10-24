import Container from "../components/Container"
// import Image from "../components/Images"
import LoginCard from "../templates/auth/LoginCard"
import cover from "../assets/mountain-peak.jpg"
import Header from "../components/Header"
import Text from "../components/Text"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import RegisterCard from "../templates/auth/RegisterCard"

const LoginPage = () => {
  const activeForm = useSelector((state: RootState) => state.formSwitch.activeForm)

  return (
    <>
      {/* <Image class="hidden sm:block absolute inset-0 w-full h-screen object-cover" imgSrc={cover} alt=""/> */}
      {activeForm === 'login' && <Container class="hidden sm:block absolute inset-0 bg-fixed h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}></Container>}
      {activeForm === 'login' && <Container class="hidden sm:block absolute inset-0 w-full h-screen z-10 bg-gray-800 bg-opacity-70 bg-fixed"></Container>}
      {activeForm === 'login' &&
        <Container class="absolute inset-0 flex items-center justify-center lg:justify-between mx-10 h-screen z-20">
          <Container class="hidden lg:flex flex-col justify-center w-[50%] mx-auto">
            <Header class="font-extrabold text-white text-[40px]">Explore Experience Embrace Cultures The World Has To Offer</Header>
            <Text class="font-bold text-white text-[25px]">Discover amazing discounts and travel to your dream country.</Text>
          </Container>
          <Container class="flex w-full lg:w-[30%] justify-center">
            <LoginCard />
          </Container>
        </Container>
      }
      {activeForm === 'register' &&
        <Container class="h-screen absolute flex items-center justify-center inset-0 mt-10 z-20">
          <RegisterCard />
        </Container>
      }
    </>
  )
}

export default LoginPage
