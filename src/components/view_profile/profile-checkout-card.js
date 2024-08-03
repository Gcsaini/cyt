import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { Link } from "react-router-dom";
import { getMinMaxPrice, truncateString } from "../../utils/helpers";

import React from "react";
export default function ProfileCheckoutCard({ pageData }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const listStyle = {
    lineHeight: "21px",
    display: "block",
  };
  return (
    <div className="col-12 sal-animate">
      <div className="rbt-card variation-01 rbt-hover card-list-2">
        <div className="rbt-card-img" style={{ flexBasis: "33%" }}>
          <ImageTag
            alt="profile image"
            src={pageData.profile}
            style={{ height: isMobile ? 255 : 235 }}
          />
        </div>
        <div className="rbt-card-body" style={{ flexBasis: "67%" }}>
          <div className="rbt-card-top">
            <div className="rbt-review">
              <h4 className="rbt-card-title">
                {pageData.name}&nbsp;
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  ({pageData.profile_code})
                </span>
              </h4>
            </div>
          </div>
          <ul className="rbt-meta" style={{ marginTop: 0 }}>
            <li style={listStyle}>
              <i className="feather-user"></i>
              {pageData.profile_type}
            </li>
            <li style={listStyle}>
              <i className="feather-message-circle"></i>
              {pageData.language_spoken}
            </li>
            <li style={listStyle}>
              <i className="feather-eye"></i>
              <span style={{ lineHeight: "2rem" }}>{pageData.serve_type}</span>
            </li>
            <li style={listStyle}>
              <i className="feather-eye"></i>
              <span style={{ lineHeight: "2rem" }}>
                {pageData.qualification}
              </span>
            </li>
            <li style={listStyle}>
              <i className="feather-eye"></i>
              <span style={{ lineHeight: "2rem" }}>
                {getMinMaxPrice(pageData)}
              </span>
            </li>
            <li style={listStyle}>
              <i className="feather-eye"></i>
              <span style={{ lineHeight: "1rem" }}>
                {pageData.year_of_exp} of experience
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
