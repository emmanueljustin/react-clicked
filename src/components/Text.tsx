interface Props {
  children: React.ReactNode;
  class?: string;
  onClick?: () => void;
}

const Text: React.FC<Props> = (props) => {
  return (
    <p onClick={props.onClick} className={props.class}>{props.children}</p>
  )
}

export default Text