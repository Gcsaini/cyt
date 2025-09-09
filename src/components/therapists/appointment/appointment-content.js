import React from "react";
import "./appointment-tab-content.css";
import ModalComponent from "../Modal/Modal-component";
import { formatDateTime } from "../../../utils/time";
import { EndSessionUrl, imagePath, StartSessionUrl } from "../../../utils/url";
import PaymentStatus from "./payment-status";
import { toast } from "react-toastify";
import { postData } from "../../../utils/actions";
import VerifyOtpDialog from "../../global/verify-otp-dialog";
import { SESSION_STATUS } from "../../../utils/constant";
import { Box, CircularProgress } from "@mui/material";
import { getDateTime, getStatusColor } from "../../../utils/helpers";

const AppointmentsContent = ({ appointments, statusList, onRefresh }) => {
  const [open, setOpen] = React.useState(false);
  const [optView, setOtpView] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);
  const [sessionEnding, setSessionEnding] = React.useState(false);
  const [pin, setPin] = React.useState("");
  const [bookingId, setBookingId] = React.useState("");

  const handleClose = () => setOpen(false);


  const handleOtpViewClose = () => setOtpView(false);

  const handleView = (item) => {
    setOpen(true);
    setModalContent(getContent(item));
  }

  const getContent = (item) => {
    return <div className="appointment-wrap appointment-detail-card">
      <ul>
        <li>
          <div className="patinet-information">
            <a href="#">
              <img
                className="modal-img"
                alt={item.client.name}
                src={`${imagePath}/${item.client?.profile}`}
              />
            </a>
            <div className="patient-info">
              <h6>
                <a href="#">{item.client.name}</a>
              </h6>
              <div className="mail-info-patient">
                <ul>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    {item.client.email}
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>{item.client.phone}
                  </li>
                  <li>
                    Fees : ₹{item.transaction.amount}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="appointment-info">
          <div className="person-info">
            <p>Type of Appointment</p>
            <ul className="d-flex apponitment-types">
              <li>
                <i className="fa-solid fa-hospital text-green"></i>
                {item.service}
              </li>

            </ul>
            <ul className="d-flex apponitment-types" style={{ marginTop: "-10px" }}>
              <li>
                <i className="fa-solid fa-hospital text-green"></i>
                {item.format}
              </li>
            </ul>
          </div>
        </li>
        <li className="appointment-action"><span style={{ fontSize: "14px", color: "black" }}>Booked For </span>
          {item.whom === "Self" ? <div style={{ fontSize: "14px" }}>Self</div> : <div className="patient-info">
            <h6 style={{ marginTop: "-6px" }}>
              <span style={{ fontSize: "14px" }}>{item.cname}</span>
            </h6>
            <div className="mail-info-patient">
              <ul>
                <li>
                  Relation:{item.relation_with_client}
                </li>
                <li>
                  Age:{item.age}
                </li>
              </ul>
            </div>
          </div>}

        </li>
      </ul>
      <div className="modal-line"></div>
      <ul className="detail-card-bottom-info">
        <li>
          <h6>Appointment Date &amp; Time</h6>
          <span>{formatDateTime(item.booking_date)}</span>
        </li>
        <li>
          <h6>Session Started</h6>
          <span>{item.session_started_at ? formatDateTime(item.session_started_at) : "-"}</span>
        </li>
        <li>
          <h6>Session End</h6>
          <span>{item.session_completed_at ? formatDateTime(item.session_completed_at) : "-"}</span>
        </li>
        <li>
          <h6>Notes</h6>
          <span>{item.notes}</span>
        </li>

      </ul>
    </div>
  }

  const handlePinchange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 6) {
      value = value.slice(0, 6);
    }

    setPin(value);
  }

  const handlePin = (item) => {
    setOtpView(true);
    setBookingId(item._id);
  }

  const handleVerifyOtp = async () => {
    if (pin.length !== 6) {
      toast.error("Please enter valid OTP");
      return;
    }
    const value = {
      pin,
      bookingId,
    };
    try {
      setLoading(true);
      const response = await postData(StartSessionUrl, value);
      if (response.status) {
        setPin("");
        setOtpView(false);
        toast.success(response.message);
        if (onRefresh) onRefresh();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }

  }

  const endSession = async (item) => {
    const value = {
      bookingId: item._id,
    };
    try {
      setSessionEnding(true);
      const response = await postData(EndSessionUrl, value);
      if (response.status) {
        toast.success(response.message);
        if (onRefresh) onRefresh();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setSessionEnding(false);
    }
  }


  return (
    <> <div className="dashboard-header mt--30">
      <h3>&nbsp;&nbsp;Session Bookinig History</h3>
    </div>
      <div className="appointment-tabs">
        <ul className="nav nav-pills inner-tab" id="pills-tab" role="tablist">
          
          <ul className="header-list-btns">
            <li>
              <div className="input-block dash-search-input">
                <input type="text" className="form-control" placeholder="Search" />
                <span className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </li>

          </ul>
        </ul>
      </div >
      <div
        className="tab-pane fade show active"
        id="pills-upcoming"
        role="tabpanel"
        aria-labelledby="pills-upcoming-tab"
      >
        <div class="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
          <table class="rbt-table table table-borderless">
            <thead>
              <tr>
                <th>Details</th>
                <th>Service</th>
                <th>For</th>
                <th>Date/Status</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.map((appointment) => {
                return <tr key={appointment._id}>
                  <th style={{ width: 200 }}>
                    <p class="h6 mb--5"><i className="fa-solid fa-user"></i> &nbsp;{appointment.client?.name}</p>
                    <p class="b3"><i className="fa-solid fa-phone"></i> &nbsp;{appointment.client?.phone}</p>
                  </th>
                  <td style={{ width: 170 }}>
                    <p class="h6 mb--5">{appointment.service}</p>
                    <p class="b3">{appointment.format}</p>
                  </td>
                  <td style={{ width: 150 }}>{
                    appointment.whom === "Self" ? <p class="b3">Self</p> :
                      <>
                        <p class="h6 mb--5">{appointment.cname}</p>
                        <p class="b3  mb--5">{appointment.relation_with_client}</p>
                        <p class="b3">Age:{appointment.age}</p>
                      </>
                  }

                  </td>
                  <td style={{ width: 180 }}>
                    <p class="h6 mb--5" style={{ fontSize: "14px" }}>{getDateTime(appointment)}</p>
                    <span class={`rbt-badge-5 ${getStatusColor(appointment.status)}`}>{appointment.status}</span>
                  </td>
                  <td>
                    <p class="h6 mb--5" style={{ fontSize: "14px" }}>{appointment.transaction.status.name}</p>
                  </td>
                  <td>
                    <div class="rbt-button-group">
                      <a class="rbt-btn btn-xs bg-primary-opacity radius-round" onClick={() => handleView(appointment)} style={{ cursor: "pointer" }}>View</a>
                      {appointment.status !== SESSION_STATUS.COMPLETED &&
                        appointment.status !== SESSION_STATUS.CANCELED && (
                          appointment.status === SESSION_STATUS.STARTED ? (
                            sessionEnding ? <Box><CircularProgress /></Box> : <a class="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" style={{ cursor: "pointer" }} onClick={() => endSession(appointment)}>End</a>
                          ) :
                            <a class="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" style={{ cursor: "pointer" }} onClick={() => handlePin(appointment)}>Start</a>
                        )}
                    </div>
                  </td>
                </tr>
              })}
            </tbody>

          </table>
        </div>

        <div className="col-lg-12" style={{ marginTop: "20px" }}>
          <nav>
            <ul className="rbt-pagination justify-content-center">
              <li>
                <a aria-label="Previous" href="/elements/style-guide#">
                  <i className="feather-chevron-left"></i>
                </a>
              </li>
              <li>
                <a href="/elements/style-guide#">1</a>
              </li>
              <li className="active">
                <a href="/elements/style-guide#">2</a>
              </li>
              <li>
                <a href="/elements/style-guide#">3</a>
              </li>
              <li>
                <a aria-label="Next" href="/elements/style-guide#">
                  <i className="feather-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        content={modalContent}
      />
      <VerifyOtpDialog open={optView} onClose={handleOtpViewClose} placeholder="Enter Pin" label="Pin" value={pin} handleChange={handlePinchange} handleClick={handleVerifyOtp} loading={loading} />
    </>
  );
};

export default AppointmentsContent;
