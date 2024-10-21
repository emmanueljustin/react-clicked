interface Props {
  children: React.ReactNode;
  class?: string;
}

const Text: React.FC<Props> = (props) => {
  return (
    <p className={props.class}>{props.children}</p>
  )
}

export default Text