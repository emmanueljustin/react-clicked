interface Props {
  type: string;
  name?: string;
  class?: string;
  placeHolder?: string;
  ariaDescribedby?: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeHolder} className={props.class} aria-describedby={props.ariaDescribedby} />
  )
}

export default Input
