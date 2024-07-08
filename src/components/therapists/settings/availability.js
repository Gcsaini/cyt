import React, { useState } from "react";

const Availability = () => {
  return (
    <>
      <table class="rbt-table table table-borderless">
        <thead>
          <tr>
            <th>Days</th>
            <th>Opens at</th>
            <th>Closes at</th>
            <th>Add More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Monday</th>
            <td>
              <div class="col-lg-6">
                <div class="rbt-modern-select bg-transparent height-45">
                  <div class="react-select css-b62m3t-container">
                    <span
                      id="react-select-sortBySelect-live-region"
                      class="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      role="log"
                      class="css-7pg0cj-a11yText"
                    ></span>
                    <div class="react-select__control css-13cymwt-control">
                      <div class="react-select__value-container react-select__value-container--has-value css-hlgwow">
                        <div class="react-select__single-value css-1dimb5e-singleValue">
                          Tongi
                        </div>
                        <div
                          class="react-select__input-container css-19bb58m"
                          data-value=""
                        >
                          <input
                            class="react-select__input"
                            style={{
                              color: "inherit",
                              background: "0px center",
                              opacity: 0,
                              width: "100%",
                              gridArea: "1 / 2",
                              font: "inherit",
                              minWidth: "2px",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              padding: "0px"
                            }}
                            autocapitalize="none"
                            autocomplete="off"
                            autocorrect="off"
                            id="react-select-sortBySelect-input"
                            spellcheck="false"
                            tabindex="0"
                            type="text"
                            aria-autocomplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            aria-activedescendant=""
                            value=""
                          />
                        </div>
                      </div>
                      <div class="react-select__indicators css-1wy0on6">
                        <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
                        <div
                          class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            class="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td>Priyanka Tiwari</td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>Ravikant</td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>Lavnya Singh</td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>Lavnya Singh</td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>Lavnya Singh</td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>Sunday</th>
            <td>Lavnya Singh</td>
            <td>January 27, 2022</td>
            <td>
              <a class="rbt-btn btn-gradient btn-sm" href="/my-account#">
                <i className="fa-solid fa-plus"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="col-12 mt--10">
        <div className="rbt-form-group">
          <a
            className="rbt-btn btn-gradient"
            href="/instructor/instructor-settings#"
          >
            Save & Next
          </a>
        </div>
      </div>
    </>
  );
};

export default Availability;
