import Container from "../Container"
import Input from "../Input";
import Label from "../Label";

interface Props {
  label: string;
  inputType: string;
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<Props> = (props) => {
  return (
    <>
      <Container>
        <Label class="block mb-0 font-bold text-sm text-gray-600">{props.label}</Label>
        <Input onChange={props.onChange} type={props.inputType} class="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 focus:outline-none" placeHolder={props.placeHolder} />
      </Container>
    </>
  )
}

export default TextField
