import Button from "../../components/Button"
import Container from "../../components/Container"
import Header from "../../components/Header"
import Images from "../../components/Images"
import Text from "../../components/Text"
import IItinerary from "../../interfaces/itinerary"

interface Props {
  itinerary: IItinerary;
}

const ItineraryCard: React.FC<Props> = (props) => {

  const { image, title, content } = props.itinerary;

  return (
    <>
      <Container class="flex flex-col overflow-clip w-full bg-white border border-gray-200 rounded-lg shadow-lg group">
        <Container class="relative w-full h-56 overflow-clip">
          <Images class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" imgSrc={image} alt="cover" />
        </Container>
        <Container class="flex flex-col flex-grow p-5">
          <Header class="mb-2 text-2xl font-bold tracking-tight group-hover:text-blue-400">{title}</Header>
          <Text class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</Text>
          <Container class="mt-auto">
            <Button onClick={() => {}} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-md active:bg-opacity-65">
                Learn more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default ItineraryCard 
