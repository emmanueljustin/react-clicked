import { useState } from "react";
import Container from "../Container"
import Icon from "../Icon";
import Input from "../Input";
import Label from "../Label";

interface Props {
  label: string;
  inputType: string;
  placeHolder: string;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Container>
        <Label class={`block mb-0 font-bold text-sm ${props.error ? `text-red-800` : `text-gray-600`}`}>{props.label}</Label>
        <Container class="relative">
          <Input
            onChange={props.onChange}
            readOnly={props.readOnly}
            type={visible ? `text` : props.inputType}
            class={`bg-gray-50 border ${props.error ? 'border-red-600' : `border-gray-300`} ${props.readOnly ? 'text-gray-500' : '' } rounded-lg block w-full p-2.5 focus:outline-none`}
            placeHolder={props.placeHolder}
          />
          { props.inputType === "password" && (
            <Container onClick={() => {setVisible(!visible)}} class="absolute top-2.5 right-2 cursor-pointer">
              <Icon class={`fa-regular ${visible ? `fa-eye` : `fa-eye-slash`}`} />
            </Container>
          )}
        </Container>
        {props.error && (
          <Label class="h-full font-bold text-red-800 text-[12px]"><Icon class="fa-solid fa-circle-exclamation text-red-800 mr-1"></Icon>{props.errorMessage}</Label>
        )}
      </Container>
    </>
  )
}

export default TextField
