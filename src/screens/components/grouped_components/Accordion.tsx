import { useState } from "react";
import Container from "../Container"
import Header from "../Header";
import Icon from "../Icon";
import Text from "../Text";

interface Props {
  question: string;
  answer: string;
}

const Accordion: React.FC<Props> = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <Container onClick={() => {setExpand(!expand)}} class="w-full p-5 rounded-md bg-gray-50 shadow-lg cursor-pointer">
        <Container class="flex items-center justify-between">
          <Container class="flex items-center space-x-2 select-none">
            <Icon class="fa-solid fa-circle-question fa-lg text-blue-600" />
            <Header>{props.question}</Header>
          </Container>

          <Icon class={`fa-solid ${expand ? "fa-chevron-up" : "fa-chevron-down"} fa-lg`} />
        </Container>

        {expand && (
          <Container class="mt-5 select-none">
            <Text>{props.answer}</Text>
          </Container>
        )}
      </Container>
    </>
  )
}

export default Accordion
