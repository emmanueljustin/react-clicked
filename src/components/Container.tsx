interface Props {
  children?: React.ReactNode;
  class?: string;
  style?: React.CSSProperties
  id?: string;
}

const Container: React.FC<Props> = (props) => {
  return (
    <div id={props.id} className={props.class} style={props.style}>{props.children}</div>
  )
}

export default Container
