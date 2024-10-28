interface Props {
  type: string;
  name?: string;
  class?: string;
  placeHolder?: string;
  ariaDescribedby?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = (props) => {
  return (
    <input
      onChange={props.onChange}
      type={props.type}
      name={props.name}
      placeholder={props.placeHolder}
      className={props.class}
      aria-describedby={props.ariaDescribedby}
      checked={props.checked}
    />
  )
}

export default Input
