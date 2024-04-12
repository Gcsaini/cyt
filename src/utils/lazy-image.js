export default function LazyImage(props) {
  const dimFn = () => {
    switch (props.dim) {
      case "100":
        return { height: "100", width: "100" };
      case "80":
        return { height: "80", width: "80" };
      case "60":
        return { height: "60", width: "60" };
      case "33":
        return { height: "33", width: "33" };
      case "43":
        return { height: "43", width: "43" };
      case "324-231":
        return { height: "324", width: "231" };
      case "494":
        return { height: "494", width: "494" };
      case "425-1305":
        return { height: "425", width: "1305" };
      case "488-710":
        return { height: "400", width: "610" };
      case "244-355":
        return { height: "244", width: "355" };
      case "300-580":
        return { height: "300", width: "580" };
      case "397":
        return { height: "397", width: "397" };
      case "50-152":
        return { height: "50", width: "152" };
      case "555-415":
        return { height: "555", width: "415" };
      case "550-500":
        return { height: "550", width: "500" };
      case "35-103":
        return { height: "35", width: "103" };
      case "1408-1920":
        return { height: "1408", width: "1920" };
      case "645-1085":
        return { height: "645", width: "1085" };
      case "143-255":
        return { height: "143", width: "255" };
      case "431-384":
        return { height: "431", width: "384" };
      case "330-638":
        return { height: "330", width: "638" };
      case "300-490":
        return { height: "300", width: "490" };
      case "135-120":
        return { height: "135", width: "120" };
      case "267-450":
        return { height: "267", width: "450" };
      default:
        return { height: "100", width: "100" };
    }
  };
  const dim = dimFn();
  return (
    <img
      alt={props.alt}
      fetchpriority="high"
      loading="lazy"
      width={dim.width}
      height={dim.height}
      decoding="async"
      data-nimg="1"
      style={{ color: "transparent" }}
      src={props.src}
      className={props.class ? props.class : ""}
    />
  );
}
