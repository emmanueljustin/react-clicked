interface Props {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = (props) => {
  return (
    <form onSubmit={props.onSubmit}>{props.children}</form>
  )
}

export default Form
