interface Props {
  children: string;
  class?: string;
}

function Text(props: Props) {
  return (
    <p className={props.class}>{props.children}</p>
  )
}

export default Text