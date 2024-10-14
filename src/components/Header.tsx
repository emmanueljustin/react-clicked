interface Props {
  children: React.ReactNode | string;
  class?: string;
}

function Header(props: Props) {
  return (
    <h1 className={props.class}>{props.children}</h1>
  )
}

export default Header
