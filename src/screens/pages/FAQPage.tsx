import Container from "../components/Container"
import Accordion from "../components/grouped_components/Accordion"
import Header from "../components/Header"

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const FAQPage = () => {
  return (
    <>
      <Container class="w-full flex flex-col justify-start items-start space-y-5 px-20">
        <Header class="font-bold text-[30px] mt-40 select-none">Frequently Asked Questions</Header>
        <Accordion question="What is this website?" answer={text} />
        <Accordion question="In what countries do you operate?" answer={text} />
      </Container>
    </>
  )
}

export default FAQPage
