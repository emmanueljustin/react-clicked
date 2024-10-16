interface Props {
  children: React.ReactNode | string;
  class?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <button className={props.class} onClick={props.onClick} style={props.style}>{props.children}</button>
  )
}


export default Button