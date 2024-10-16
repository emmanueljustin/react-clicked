interface Props {
  children?: React.ReactNode;
  class?: string;
  style?: React.CSSProperties
  id?: string;
}

function Container(props: Props) {
  return (
    <div id={props.id} className={props.class} style={props.style}>{props.children}</div>
  )
}

export default Container
