import React from "react";

export default function FAQ(props) {
  const [faq, setFaq] = React.useState();
  return (
    <div className="accordion-item card">
      <h2 className="accordion-header card-header" id="headingOne3">
        <button
          onClick={() => setFaq(faq !== true)}
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne3"
          aria-expanded={faq}
          aria-controls="collapseOne3"
        >
          {props.q}
        </button>
      </h2>
      <div
        id="collapseOne3"
        className={
          faq
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        aria-labelledby="headingOne3"
        data-bs-parent="#accordionExamplec3"
      >
        <div className="accordion-body card-body">{props.a}</div>
      </div>
    </div>
  );
}
