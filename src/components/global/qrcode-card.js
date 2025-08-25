import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
export default function QrcodeCard({ pageData }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className="col-12 sal-animate">
      <div className="rbt-card variation-01 rbt-hover card-list-2">
        <div className="rbt-card-img" style={{ flexBasis: "33%" }}>
          <ImageTag
            alt="qr code"
            src={pageData.qrImage}
            style={{ height: isMobile ? 255 : 185 }}
          />
        </div>
        <div className="rbt-card-body" style={{ flexBasis: "90%" }}>
          <div className="rbt-card-top">
            <div className="rbt-review">
              <h4 className="rbt-card-title">
                {pageData.upi_details.upi_id}&nbsp;
                <br />
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  ({pageData.upi_details.name})
                </span>
                <br />
              </h4>
              <span>After payment please submit the transaction id</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
