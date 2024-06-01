export default function ImageTag(props) {
  return (
    <img
      alt={props.alt}
      fetchpriority="high"
      loading="lazy"
      width={props.width}
      height={props.height}
      decoding="async"
      data-nimg="1"
      style={{ color: "transparent" }}
      src={props.src}
      className={props.class ? props.class : ""}
    />
  );
}
