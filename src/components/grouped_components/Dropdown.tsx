import { useEffect, useState } from "react";
import Container from "../Container";
import Icon from "../Icon";
import Text from "../Text";
import Label from "../Label";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../store/dropDownSlice";

interface Props {
  type: string;
  items: string[];
  class?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const Dropdown: React.FC<Props> = (props) => {

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(setSelectedItem(value))
  })

  return (
    <>
      <Container class={props.class}>
        <Container class="relative w-full">
          {props.label !== null && (
            <Label class="block mb-0 font-bold text-sm text-gray-600">{props.label}</Label>
          )}
          <Container onClick={() => {setToggle(!toggle)}} class="drop-down-btn">
            <Text class={value !== "" ? `text-gray-900` : `text-gray-400`}>{value === "" ? props.type : value}</Text>
            <Icon class="fa-solid fa-caret-down text-gray-600" />
          </Container>

          {toggle && (
          <Container class="absolute left-0 mt-2 rounded-md bg-gray-200 shadow-lg z-30">
            <Container class="space-y-1 p-2">
              {props.items.map((item, index) => (
                <Text key={index} class="drop-down-selection"
                  onClick={() => {
                    setValue(item)
                    setToggle(false)
                  }}>
                  {item}
                </Text>
              ))}
            </Container>
          </Container>
          )}

        </Container>
      </Container>
    </>
  )
}

export default Dropdown
