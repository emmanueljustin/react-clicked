interface Props {
  imgSrc: string;
  class?: string;
  id?: string;
  alt: string;
  dropdownTrigger?: string;
  dropdownToggle?: string;
}

const Image: React.FC<Props> = (props) => {
  return (
    <img
      src={props.imgSrc}
      id={props.id}
      className={props.class}
      alt={props.alt}
      data-dropdown-trigger={props.dropdownTrigger}
      data-dropdown-toggle={props.dropdownToggle}
    />
  )
}

export default Image
