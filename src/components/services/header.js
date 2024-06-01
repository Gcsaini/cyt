import LazyImage from "../../utils/lazy-image";
import BgImg from "../../assets/img/bg-image-10e53d.jpg";
export default function ServicesHeader(props) {
  return (
    <div class="breadcrumb-image-container breadcrumb-style-max-width">
      <div class="breadcrumb-image-wrapper">
        <LazyImage alt="Education" dim={"1408-1920"} src={BgImg} />
      </div>
      <div class="breadcrumb-content-top text-center">
        <h1 class="title">{props.data.title}</h1>
        <p> {props.data.short_desc}</p>
      </div>
    </div>
  );
}
