interface Props {
  children?: React.ReactNode
  class?: string;
}

function Container(props: Props) {
  return (
    <div className={props.class}>{props.children}</div>
  )
}

export default Container
