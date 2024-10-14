interface Props {
  imgSrc: string;
  class?: string;
  alt: string;
}

function Image(props: Props) {
  return (
    <img src={props.imgSrc} className={props.class} alt={props.alt} />
  )
}

export default Image
