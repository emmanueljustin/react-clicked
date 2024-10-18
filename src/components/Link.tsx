interface Props {
  children: React.ReactNode;
  class?: string;
  href: string;
}

const Link: React.FC<Props> = (props) => {
  return (
    <a href={props.href} className={props.class}>{props.children}</a>
  )
}

export default Link
