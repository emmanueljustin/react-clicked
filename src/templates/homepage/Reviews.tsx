import { useEffect } from "react"
import Container from "../../components/Container"
import Header from "../../components/Header"
import Icon from "../../components/Icon"
import Image from "../../components/Images"
import Text from "../../components/Text"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { nextIndex } from "../../store/reviewSlice"

const reviewsData = [
  {
    id: 1,
    name: "Amir Hassan",
    imageUrl: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4,
    description: "Exeptional Service",
    content: "Exceptional Service! I had an incredible 10-day trip to Italy organized by Clicked. They tailored a perfect itinerary with beautiful accommodations and fantastic local experiences."
  },
  {
    id: 2,
    name: "John Doe",
    imageUrl: "https://media.istockphoto.com/id/1196391445/photo/portrait-of-a-happy-young-man-of-asian-ethnic-descent.jpg?s=612x612&w=0&k=20&c=FTBzIOLoMfuenRMcQKkvpkiDg7nD8ZHmjhtYSZvskfE=",
    rating: 5,
    description: "Memorable ❤️",
    content: "An unforgettable journey! The attention to detail was impeccable, and every activity was a delight."
  },
  {
    id: 3,
    name: "Jane Smith",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsg6hp7gxoztXGIuT2KmhpOg1lANPyDK2xbQ&s",
    rating: 3,
    description: "Life Changing",
    content: "Great experience overall, but some activities could have been better organized."
  },
];

const Reviews = () => {

  const dispatch = useDispatch()
  const currIndex = useSelector((state: RootState) => state.review.currIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextIndex(reviewsData.length))
    }, 3000)

    return () => clearInterval(interval)
  }, [dispatch])

  return (
    <>
      <Container class="w-full overflow-hidden pb-20">
        <Container class="flex flex-col justify-center items-center text-center">
          <Header class="home-content-header text-shadow">Reviews</Header>
          <Text class="font-medium text-sm px-10 md:px-0 md:text-lg">
            We provide quality service and tours for your own pleasure and amusement here is the testimonial of our clients
          </Text>

          <Container class="relative flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currIndex * 100}%)` }}>
          {reviewsData.map((review) => 
            <Container key={review.id} class="flex justify-center items-center min-w-full">
              <Container class="flex flex-col items-center justify-center mt-10 w-2/4 bg-white rounded-lg px-20 py-10 text-center shadow-lg">
                <Image class="h-32 w-32 rounded-full object-cover" imgSrc={review.imageUrl} alt="" />
                <Header class="mt-4 font-bold text-2xl">{review.name}</Header>
                <Container class="mt-2 flex space-x-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Icon key={index} class={`${index < review.rating ? "fa-solid" : "fa-regular"} fa-star text-yellow-600`} />
                  ))}
                </Container>
                <Text class="mt-4 font-bold text-lg">"{review.description}"</Text>
                <Text class="mt-2 text-base font-medium">{review.content}</Text>
              </Container>
            </Container>
          )}
          </Container>

        </Container>
      </Container>
    </>
  )
}

export default Reviews
