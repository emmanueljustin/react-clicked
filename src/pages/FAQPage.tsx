import Container from "../components/Container"
import Accordion from "../components/grouped_components/Accordion"
import Header from "../components/Header"

const FAQPage = () => {
  return (
    <>
      <Container class="w-full flex flex-col justify-start items-start space-y-5 px-20">
        <Header class="font-bold text-[30px] mt-40">Frequently Asked Questions</Header>
        <Accordion question="What is this website?" answer="" expand={false} />
      </Container>
    </>
  )
}

export default FAQPage
