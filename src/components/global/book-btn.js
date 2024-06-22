import { Link } from "react-router-dom";

export default function BookBtn() {
  return (
    <Link
      className="rbt-btn btn-gradient book-btn"
      to=""
      style={{ display: "flex", justifyContent: "center" }}
    >
      <span>&nbsp;&nbsp;Book Now&nbsp;&nbsp;</span>
    </Link>
  );
}
