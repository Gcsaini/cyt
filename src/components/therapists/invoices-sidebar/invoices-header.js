import React from "react";

export default function InvoicesHeader() {
  return (
    <>
      <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div class="content">
          <div class="section-title">
            <h4 class="rbt-title-style-3">Invoices</h4>
          </div>
          <div class="rbt-dashboard-table table-responsive mobile-table-750">
            <div class="col-lg-6" style={{ marginBottom: "20px" }}>
              <form action="#" class="rbt-search-style-1">
                <input type="text" placeholder="Search" />
                <button class="search-btn">
                  <i class="feather-search"></i>
                </button>
              </form>
            </div>
            <table class="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Course Name</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span class="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-15 col-xl-15">
        <div className="dashboard-header">
          <h3>Invoices</h3>
        </div>
        <div className="search-header">
          <div className="search-field">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="custom-table">
          <div className="table-responsive">
            <table className="table table-center mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Appointment Date</th>
                  <th>Booked on</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td>
                      <a
                        href="#"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        {invoice.id}
                      </a>
                    </td>
                    <td>
                      <div className="table-avatar-patient">
                        <a href="docter-profile.html">
                          <img src={invoice.patientImage} alt="user image" />
                        </a>
                        <a className="patient-name" href="doctor-profile.html">
                          {invoice.patient}
                        </a>
                      </div>
                    </td>
                    <td>{invoice.appointmentDate}</td>
                    <td>{invoice.bookedOn}</td>
                    <td>{invoice.amount}</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#invoice_view"
                        >
                          <i className="fa-solid fa-link"></i>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-print"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
}
