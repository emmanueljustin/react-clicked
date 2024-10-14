import Image from '../../components/Images'
import coverPhoto from '../../assets/mountain-cover.jpg'
import Header from '../../components/Header'
import Container from '../../components/Container'

function LandingPage() {
  const mainHeader = "Unleash Your Vision\nWhere Dreams Take Shape."

  return (
    <>
      <Image class="w-full h-screen object-cover" imgSrc={coverPhoto} alt="cover" />
      <Container class="absolute inset-0 w-full h-screen z-10 bg-blue-600 bg-opacity-25"></Container>
      <Container class="absolute inset-0 flex items-center z-20 w-[50%] pt-20 pl-20">
        <Header class="font-bold text-[50px] text-white"><pre>{mainHeader}</pre></Header>
      </Container>
    </>
  )
}

export default LandingPage
