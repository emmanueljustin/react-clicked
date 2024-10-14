interface Props {
  children: React.ReactNode | string;
  class?: string;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <button className={props.class} onClick={props.onClick}>{props.children}</button>
  )
}


export default Button