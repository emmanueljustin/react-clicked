interface Props {
  children: React.ReactNode | string;
  type?: "submit" | "reset" | "button";
  class?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props)  => {
  return (
    <button className={props.class} type={props.type} onClick={props.onClick} style={props.style}>{props.children}</button>
  )
}


export default Button