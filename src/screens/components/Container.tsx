interface Props {
  children?: React.ReactNode;
  class?: string;
  style?: React.CSSProperties;
  role?: string;
  id?: string;
  ariaLabelled?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Container: React.FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={props.class}
      style={props.style}
      onClick={props.onClick}
      aria-labelledby={props.ariaLabelled}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  )
}

export default Container
