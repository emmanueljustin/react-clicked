interface Props {
  children?: React.ReactNode;
  class?: string;
  id?: string;
}

function Container(props: Props) {
  return (
    <div id={props.id} className={props.class}>{props.children}</div>
  )
}

export default Container
