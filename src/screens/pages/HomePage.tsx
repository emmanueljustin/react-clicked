import Container from "../components/Container"
import Header from "../components/Header"
import IItinerary from "../../interfaces/itinerary"
import Destination from "../templates/homepage/Destinations"
import Footer from "../templates/homepage/Footer"
import ItineraryCard from "../templates/homepage/ItineraryCard"
import LandingScreen from "../templates/homepage/LandingScreen"
import Reviews from "../templates/homepage/Reviews"

const HomePage = () => {

  type IItineraries = IItinerary[]
  
  const itineraries: IItineraries = [
    {
      image: "https://cdn.britannica.com/88/158788-050-314EBC88/Mount-Triumph-height-North-Cascades-National-Park.jpg",
      title: "Mountain Climbing",
      content: "Experience the thrill of adventure with Summit Climbing! Whether you're a seasoned climber or a curious beginner, our expert-guided trips offer an unforgettable journey to breathtaking peaks. Immerse yourself in nature as you conquer challenging routes, surrounded by stunning landscapes and invigorating fresh air."
    },
    {
      image: "https://banfflakelouise.bynder.com/m/3d04f19979f432ec/2000x1080_jpg-2022_MoraineLake_TravelAlberta_RothandRamberg%20(3).jpg",
      title: "Lake Tour",
      content: "Embark on an unforgettable lake tour, where tranquility meets breathtaking natural beauty! Experience the serenity of pristine waters surrounded by lush forests and majestic mountains. Our guided tours offer a perfect blend of adventure and relaxation, making it suitable for all ages."
    },
    {
      image: "https://www.travelorientalmindoro.ph/Content/img/uploads/96530940-34f6-4962-9e9c-ce2b0b977d82.jpg",
      title: "Island Hopping",
      content: "Set sail on an exhilarating island hopping adventure, where each stop unveils a new paradise! Experience the thrill of exploring vibrant islands, each with its own unique charm and breathtaking beauty."
    },
    {
      image: "https://i0.wp.com/meanderingmentor.com/wp-content/uploads/2023/06/Best-Things-to-Do-in-Vigan-Walk-along-the-Cobblestoned-Streets-of-Vigan-Meandering-Mentor.jpg?resize=1024%2C768&ssl=1",
      title: "Explore Rich Culture",
      content: "Immerse yourself in a captivating journey that celebrates the vibrant tapestry of rich cultures around the world. This experience invites you to delve deep into the traditions, customs, and histories that shape communities, offering a unique perspective on the beauty of diversity."
    }
  ]

  return (
    <>
      <LandingScreen />
      <Container id="info" class="w-full px-10 mx-auto mb-5">
        <Header class="home-content-header text-shadow text-center">
          Plan Your Trip With Us
        </Header>
        <Container class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {itineraries.map((itinerary, index) => (
            <ItineraryCard key={index} itinerary={itinerary} />
          ))}
        </Container>
      </Container>
      <Destination />
      <Reviews />
      <Footer />
    </>
  )
}

export default HomePage
