interface Props {
  children: React.ReactNode;
  class?: string;
  href: string;
  target?: string;
}

const Link: React.FC<Props> = (props) => {
  return (
    <a href={props.href} className={props.class} target={props.target}>{props.children}</a>
  )
}

export default Link
