import LazyImage from "../../utils/lazy-image";
import BgImg from "../../assets/img/bg-image-10e53d.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ServicesHeader(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div
      className="breadcrumb-image-container breadcrumb-style-max-width"
      style={{ marginTop: isMobile || isTablet ? 50 : 120 }}
    >
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
