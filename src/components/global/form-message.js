import { errorColor, successColor } from "../../utils/colors";

export default function FormMessage(props) {
  return (
    <div className="col-12">
      <span style={{ color: successColor }}>{props.success}</span>
      <span style={{ color: errorColor }}>{props.error}</span>
    </div>
  );
}
