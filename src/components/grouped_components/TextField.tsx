import Container from "../Container"
import Icon from "../Icon";
import Input from "../Input";
import Label from "../Label";

interface Props {
  label: string;
  inputType: string;
  placeHolder: string;
  error?: boolean;
  errorMessage?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<Props> = (props) => {
  return (
    <>
      <Container>
        <Label class={`block mb-0 font-bold text-sm ${props.error ? `text-red-800` : `text-gray-600`}`}>{props.label}</Label>
        <Input
          onChange={props.onChange}
          type={props.inputType}
          class={`bg-gray-50 border ${props.error ? 'border-red-600' : `border-gray-300`} rounded-lg block w-full p-2.5 focus:outline-none`}
          placeHolder={props.placeHolder}
        />
        {props.error &&
          <Label class="h-full font-bold text-red-800 text-[12px]"><Icon class="fa-solid fa-circle-exclamation text-red-800 mr-1"></Icon>{props.errorMessage}</Label>
        }
      </Container>
    </>
  )
}

export default TextField
