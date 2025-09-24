import React, { useState } from "react";
import "./appointment-tab-content.css";
import ModalComponent from "../Modal/Modal-component";
import { formatDateTime } from "../../../utils/time";
import { EndSessionUrl, imagePath, StartSessionUrl } from "../../../utils/url";
import { toast } from "react-toastify";
import { postData } from "../../../utils/actions";
import VerifyOtpDialog from "../../global/verify-otp-dialog";
import { SESSION_STATUS } from "../../../utils/constant";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import { FaPlay, FaStop, FaUser, FaPhone, FaEnvelope, FaNotesMedical, FaTimes } from "react-icons/fa";

const AppointmentsContent = ({ appointments, onRefresh }) => {
  const [open, setOpen] = useState(false);
  const [optView, setOtpView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [sessionEnding, setSessionEnding] = useState(false);
  const [pin, setPin] = useState("");
  const [bookingId, setBookingId] = useState("");

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleClose = () => setOpen(false);
  const handleOtpViewClose = () => setOtpView(false);

  const getPaymentStatusColor = (status) => {
    switch ((status || "").toLowerCase()) {
      case "success":
      case "completed":
        return "#28a745";
      case "pending":
      case "processing":
        return "#ffc107";
      case "failed":
      case "canceled":
        return "#dc3545";
      case "refunded":
        return "#007bff";
      default:
        return "#6c757d";
    }
  };

  const handleView = (item) => {
    setOpen(true);
    setModalContent(
      <div style={{
        padding: isMobile ? 16 : 24,
        borderRadius: 16,
        background: "#fff",
        maxWidth: isMobile ? "90vw" : 500,
        margin: "auto",
        boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
        position: "relative"
      }}>
        {/* Close Button */}
        <FaTimes
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            cursor: "pointer",
            fontSize: 18,
            color: "#333"
          }}
        />
        {/* Client Info */}
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
          {item.client?.profile ? (
            <img
              src={`${imagePath}/${item.client.profile}`}
              alt={item.client?.name}
              style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", border: "2px solid #007f99" }}
            />
          ) : (
            <div style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#007f99",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28
            }}>
              <FaUser />
            </div>
          )}
          <div>
            <h5 style={{ marginBottom: 4 }}>{item.client?.name}</h5>
            <p style={{ margin: 0, fontSize: 13, color: "#555" }}><FaPhone style={{ marginRight: 6 }} />{item.client?.phone}</p>
            <p style={{ margin: 0, fontSize: 13, color: "#555" }}><FaEnvelope style={{ marginRight: 6 }} />{item.client?.email}</p>
            <p style={{ margin: 0, fontSize: 13 }}>Fees: ₹{item.transaction?.amount}</p>
          </div>
        </div>

        {/* Appointment Info */}
        <div style={{ marginBottom: 10 }}>
          <strong>Type of Appointment:</strong> {item.service} / {item.format}
        </div>

        <div style={{ marginBottom: 10 }}>
          <strong>Booked For:</strong> {item.whom === "Self" ? "Self" : item.cname}
        </div>

        {item.whom !== "Self" && (
          <div style={{ marginBottom: 10 }}>
            <p style={{ margin: 0 }}>Relation: {item.relation_with_client}</p>
            <p style={{ margin: 0 }}>Age: {item.age}</p>
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 10 }}>
          <div><strong>Appointment Date:</strong> {formatDateTime(item.booking_date)}</div>
          <div><strong>Session Start:</strong> {item.session_started_at ? formatDateTime(item.session_started_at) : "-"}</div>
          <div><strong>Session End:</strong> {item.session_completed_at ? formatDateTime(item.session_completed_at) : "-"}</div>
        </div>

        <div style={{ marginTop: 10 }}>
          <strong>Notes:</strong>
          <p style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13 }}>
            <FaNotesMedical /> {item.notes || "No notes available"}
          </p>
        </div>

        <div style={{ marginTop: 10 }}>
          <strong>Payment Status:</strong>
          <span style={{
            marginLeft: 8,
            color: getPaymentStatusColor(item.transaction?.status?.name),
            fontWeight: 600
          }}>
            {item.transaction?.status?.name || "-"}
          </span>
        </div>
      </div>
    );
  };

  const handlePinChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 6) value = value.slice(0, 6);
    setPin(value);
  };

  const handlePin = (item) => {
    setOtpView(true);
    setBookingId(item._id);
  };

  const handleVerifyOtp = async () => {
    if (pin.length !== 6) {
      toast.error("Please enter valid OTP");
      return;
    }
    try {
      setLoading(true);
      const response = await postData(StartSessionUrl, { pin, bookingId });
      if (response.status) {
        setPin("");
        setOtpView(false);
        toast.success(response.message);
        onRefresh && onRefresh();
      } else toast.error(response.message);
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const endSession = async (item) => {
    try {
      setSessionEnding(true);
      const response = await postData(EndSessionUrl, { bookingId: item._id });
      if (response.status) {
        toast.success(response.message);
        onRefresh && onRefresh();
      } else toast.error(response.message);
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setSessionEnding(false);
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {appointments.map((appt) => (
          <div
            key={appt._id}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
              borderRadius: 16,
              background: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            {/* Client Info */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {appt.client?.profile ? (
                <img src={`${imagePath}/${appt.client.profile}`} alt={appt.client?.name} style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover", border: "2px solid #007f99" }} />
              ) : (
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#007f99", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                  <FaUser />
                </div>
              )}
              <div>
                <h6 style={{ margin: 0 }}>{appt.client?.name}</h6>
                <p style={{ margin: 0, fontSize: 12, color: "#555" }}>{appt.service} / {appt.format}</p>
                <p style={{ margin: 0, fontSize: 12 }}>
                  Payment: <span style={{ color: getPaymentStatusColor(appt.transaction?.status?.name), fontWeight: 600 }}>{appt.transaction?.status?.name || "-"}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 8, marginTop: isMobile ? 8 : 0 }}>
              <button onClick={() => handleView(appt)} style={{ padding: "6px 12px", borderRadius: 8, background: "#f0f0f0", border: "1px solid #ccc", display: "flex", alignItems: "center", gap: 5 }}>
                <FaUser /> View
              </button>
              {appt.status !== SESSION_STATUS.COMPLETED && appt.status !== SESSION_STATUS.CANCELED && (
                appt.status === SESSION_STATUS.STARTED ? (
                  sessionEnding ? <Box><CircularProgress size={24} /></Box> :
                    <button onClick={() => endSession(appt)} style={{ padding: "6px 12px", borderRadius: 8, background: "linear-gradient(135deg,#ff4d4f,#ff7a5c)", color: "#fff", border: "none", display: "flex", alignItems: "center", gap: 5 }}><FaStop /> End</button>
                ) : (
                  <button onClick={() => handlePin(appt)} style={{ padding: "6px 12px", borderRadius: 8, background: "linear-gradient(135deg,#00b874,#00d2ff)", color: "#fff", border: "none", display: "flex", alignItems: "center", gap: 5 }}><FaPlay /> Start</button>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal & OTP */}
      <ModalComponent open={open} handleClose={handleClose} content={modalContent} />
      <VerifyOtpDialog open={optView} onClose={handleOtpViewClose} placeholder="Enter Pin" label="Pin" value={pin} handleChange={handlePinChange} handleClick={handleVerifyOtp} loading={loading} />
    </>
  );
};

export default AppointmentsContent;
