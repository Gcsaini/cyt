export default function ImageTag(props) {
  return (
    <img
      alt={props.alt}
      fetchpriority="high"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      style={props.style}
      src={props.src}
      className={props.class ? props.class : ""}
      {...props}
    />
  );
}
