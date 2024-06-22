import { Link } from "react-router-dom";

export default function OutlineBtn(props) {
  return (
    <Link class="out-btn out-btn-border" to="">
      {props.title}
    </Link>
  );
}
