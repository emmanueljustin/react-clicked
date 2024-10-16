import Container from "../../components/Container"
import Header from "../../components/Header"
import Image from "../../components/Images"

function Destination() {
  return (
    <Container class="w-full p-10 flex flex-col justify-center">
      <Header class="home-content-header text-shadow">Popular Destinations</Header>

      {/* Main Column */}
      <Container class="flex flex-col gap-10 mt-10">

        {/* 1st Row */}
        <Container class="flex flex-row justify-evenly">
          <Container class="relative h-72 w-[30%] overflow-clip rounded-md cursor-pointer group">
            <Image class="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc="https://www.routeperfect.com/blog/wp-content/uploads/2023/11/bern_switzerland.jpeg" alt="switzerland" />
            <Container class="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-65 z-10"></Container>
            <Container class="absolute inset-0 flex h-full w-full items-center justify-center z-20">
              <Header class="px-3 font-bold text-base md:text-xl text-white text-center">Bern, Switzerland</Header>
            </Container>
          </Container>
          <Container class="relative h-72 w-[30%] overflow-clip rounded-md cursor-pointer group">
            <Image class="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc="https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-1200-80.jpg" alt="italy" />
            <Container class="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-65 z-10"></Container>
            <Container class="absolute inset-0 flex h-full w-full items-center justify-center z-20">
              <Header class="px-3 font-bold text-base md:text-xl text-white text-center">Rome, Italy</Header>
            </Container>
          </Container>
          <Container class="relative h-72 w-[30%] overflow-clip rounded-md cursor-pointer group">
            <Image class="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc="https://pinaywise.com/wp-content/uploads/2024/04/batanes-philippines.jpg" alt="philippines" />
            <Container class="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-65 z-10"></Container>
            <Container class="absolute inset-0 flex h-full w-full items-center justify-center z-20">
              <Header class="px-3 font-bold text-base md:text-xl text-white text-center">Batanes, Philippines</Header>
            </Container>
          </Container>
        </Container>

        {/* 2nd Row */}
        <Container class="flex flex-row justify-evenly">
          <Container class="relative h-72 w-[30%] overflow-clip rounded-md cursor-pointer group">
            <Image class="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc="https://i.insider.com/649b13386eb0a800194d589a?width=700" alt="switzerland" />
            <Container class="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-65 z-10"></Container>
            <Container class="absolute inset-0 flex h-full w-full items-center justify-center z-20">
              <Header class="px-3font-bold text-base md:text-xl text-white text-center">Paris, France</Header>
            </Container>
          </Container>
          <Container class="relative h-72 w-[30%] overflow-clip rounded-md cursor-pointer group">
            <Image class="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc="https://www.kevmrc.com/wp-content/uploads/2021/12/tower-bridge-is-one-of-the-famous-buildings-in-england.jpg" alt="italy" />
            <Container class="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-65 z-10"></Container>
            <Container class="absolute inset-0 flex h-full w-full items-center justify-center z-20">
              <Header class="px-3 font-bold text-base md:text-xl text-white text-center">London, England</Header>
            </Container>
          </Container>
          <Container class="relative h-72 w-[30%] overflow-clip rounded-md cursor-pointer group">
            <Image class="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc="https://ik.imagekit.io/tvlk/blog/2024/10/Screenshot-2024-10-08-at-15.41.20-1024x674.jpg?tr=dpr-2,w-675" alt="philippines" />
            <Container class="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-65 z-10"></Container>
            <Container class="absolute inset-0 flex h-full w-full items-center justify-center z-20">
              <Header class="px-3 font-bold text-base md:text-xl text-white text-center">Osaka, Japan</Header>
            </Container>
          </Container>
        </Container>
      
      </Container>

    </Container>
  )
}

export default Destination
