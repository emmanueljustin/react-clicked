interface Props {
  children?: React.ReactNode;
  class?: string;
  style?: React.CSSProperties;
  role?: string;
  id?: string;
  onClick?: () => void;
}

const Container: React.FC<Props> = (props) => {
  return (
    <div id={props.id} className={props.class} style={props.style} onClick={props.onClick}>{props.children}</div>
  )
}

export default Container