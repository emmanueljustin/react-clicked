import Container from "../Container"
import Header from "../Header";
import Icon from "../Icon";

interface Props {
  question: string;
  answer: string;
  expand: boolean
}

const Accordion: React.FC<Props> = (props) => {
  return (
    <>
      <Container class="w-full p-5 rounded-md bg-gray-50 shadow-lg cursor-pointer">
        <Container class="flex items-center justify-between">
          <Container class="flex items-center space-x-2">
            <Icon class="fa-solid fa-circle-question fa-lg text-blue-600" />
            <Header>{props.question}</Header>
          </Container>

          <Icon class={`fa-solid ${props.expand ? "fa-chevron-up" : "fa-chevron-down"} fa-lg`} />
        </Container>
      </Container>
    </>
  )
}

export default Accordion
