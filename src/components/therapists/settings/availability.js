import React, { useState } from "react";
// import "./availability.css";

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
            <td>Suresh Sharma</td>
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
