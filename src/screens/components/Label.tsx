interface Props {
  class?: string;
  children: React.ReactNode;
}

const Label: React.FC<Props> = (props) => {
  return (
    <label className={props.class}>{props.children}</label>
  )
}

export default Label
