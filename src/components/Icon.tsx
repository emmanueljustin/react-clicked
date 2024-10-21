interface Props {
  class: string;
}

const Icon: React.FC<Props> = (props) => {
  return (
    <i className={props.class}></i>
  )
}

export default Icon
