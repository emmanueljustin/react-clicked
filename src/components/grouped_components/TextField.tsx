import Container from "../Container"
import Input from "../Input";
import Label from "../Label";

interface Props {
  label: string;
  inputType: string;
  placeHolder: string;
}

const TextField: React.FC<Props> = (props) => {
  return (
    <>
      <Container>
        <Label class="block mb-2 font-bold text-base text-gray-600">{props.label}</Label>
        <Input type={props.inputType} class="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 focus:outline-none" placeHolder={props.placeHolder} />
      </Container>
    </>
  )
}

export default TextField
