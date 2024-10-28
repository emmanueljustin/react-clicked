interface Props {
  imgSrc: string;
  class?: string;
  alt: string;
}

const Image: React.FC<Props> = (props) => {
  return (
    <img src={props.imgSrc} className={props.class} alt={props.alt} />
  )
}

export default Image
