interface Props {
  children: React.ReactNode | string;
  class?: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <h1 className={props.class}>{props.children}</h1>
  )
}

export default Header
