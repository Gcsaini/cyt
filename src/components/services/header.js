import LazyImage from "../../utils/lazy-image";
import BgImg from "../../assets/img/bg-image-10e53d.jpg";
export default function ServicesHeader(props) {
  return (
    <div className="breadcrumb-image-container breadcrumb-style-max-width">
      <div className="breadcrumb-image-wrapper">
        <LazyImage alt="Education" dim={"1408-1920"} src={BgImg} />
      </div>
      <div className="breadcrumb-content-top text-center">
        <h1 className="title">{props.data.title}</h1>
        <p> {props.data.short_desc}</p>
      </div>
    </div>
  );
}
