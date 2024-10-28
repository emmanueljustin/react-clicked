interface Props {
  type: string;
  name?: string;
  class?: string;
  readOnly?: boolean;
  placeHolder?: string;
  ariaDescribedby?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = (props) => {
  return (
    <input
      onChange={props.onChange}
      readOnly={props.readOnly}
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
