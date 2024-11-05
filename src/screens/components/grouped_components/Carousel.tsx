import { useDispatch, useSelector } from "react-redux"
import Container from "../Container"
import { RootState } from "../../../store/store"
import { useEffect } from "react"
import { nextImgIndex } from "../../../store/carouselSlice"
import ad1 from "../../../assets/ads/ad1.jpg"
import ad2 from "../../../assets/ads/ad2.jpg"
import ad3 from "../../../assets/ads/ad3.jpg"
import Image from "../Images"

interface Props {
  class?: string;
}

const imgs = [ad1, ad2, ad3]

const Carousel: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const currImgIndex = useSelector((state: RootState) => state.carousel.currIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImgIndex(imgs.length))
    }, 3000)

    return () => clearInterval(interval)
  }, [dispatch])

  return (
    <>
      <Container class={props.class}>

        <Container class="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currImgIndex * 100}%)` }}>
          {imgs.map((img, index) => (
            <Image key={index} imgSrc={img} class="object-cover" alt="" />
          ))}
        </Container>

      </Container>
    </>
  )
}

export default Carousel
