import Image from '../../components/Images'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Text from '../../components/Text'
import coverPhoto from '../../../assets/mountain-cover.jpg'
import miniCoverPhoto from '../../../assets/mountain-peak.jpg'

const LandingPage = () => {
  return (
    <>
      {/* This is for medium -> large screens */}
      <Container class="hidden md:block">
        <Image class="w-full h-screen object-cover" imgSrc={coverPhoto} alt="cover" />
        <Container class="absolute inset-0 w-full h-screen z-10 bg-blue-600 bg-opacity-25"></Container>
        <Container class="absolute inset-0 flex justify-center items-center z-20 w-full pt-20">
          <Container class="w-3/4 p-20 text-center">
            <Header class="font-extrabold text-[50px] text-white">Discover Your World</Header>
            <Header class="font-extrabold text-[50px] text-white">One Adventure at a Time</Header>
            <Header class="font-extrabold text-[50px] text-white">One Click Away</Header>
            <Text class="text-white font-medium text-xl mt-5">Click offers you a chance to explore and go on an adventure of a lifetime on where you will meet a lot of people. Explore different cultures and understand their rich history.</Text>
          </Container>
        </Container>
      </Container>

      {/* This is for below medium screens */}
      <Container class="block md:hidden">
        <Image class="w-full h-screen object-cover" imgSrc={miniCoverPhoto} alt="cover" />
        <Container class="absolute inset-0 w-full h-screen z-10 bg-gray-900 bg-opacity-25"></Container>
        <Container class="absolute inset-0 flex justify-center items-center z-20 w-full pt-20">
          <Container class="w-3/4 p-5 text-center">
            <Header class="font-extrabold text-[35px] text-white">One Adventure at a Time</Header>
            <Header class="font-extrabold text-[35px] text-white">One Click Away</Header>
            <Text class="text-white font-medium text-lg mt-5">Click offers you a chance to explore and go on an adventure of a lifetime on where you will meet a lot of people. Explore different cultures and understand their rich history.</Text>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default LandingPage
