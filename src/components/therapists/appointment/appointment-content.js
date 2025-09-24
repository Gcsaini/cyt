import React, { useState } from "react";
import "./appointment-tab-content.css";
import ModalComponent from "../Modal/Modal-component";
import { formatDateTime } from "../../../utils/time";
import { EndSessionUrl, StartSessionUrl } from "../../../utils/url";
import { toast } from "react-toastify";
import { postData } from "../../../utils/actions";
import VerifyOtpDialog from "../../global/verify-otp-dialog";
import { SESSION_STATUS } from "../../../utils/constant";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import { FaPlay, FaStop, FaUser, FaNotesMedical, FaClock, FaTimes } from "react-icons/fa";

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
      <div
        style={{
          padding: isMobile ? 16 : 24,
          borderRadius: 16,
          background: "#fff",
          width: isMobile ? "95vw" : 500,
          maxHeight: isMobile ? "90vh" : "80vh",
          margin: "auto",
          boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
          overflowY: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}
      >
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

        <div style={{ marginBottom: 16 }}>
          <h5 style={{ margin: "0 0 4px 0", fontSize: isMobile ? 16 : 18 }}>{item.client?.name || "Unknown Client"}</h5>
          <p style={{ margin: "0 0 2px 0", fontSize: isMobile ? 12 : 14 }}>Service: {item.service} / {item.format}</p>
          <p style={{ margin: "0 0 2px 0", fontSize: isMobile ? 12 : 14 }}>Fees: ₹{item.transaction?.amount || "-"}</p>
          <p style={{ margin: 0, fontSize: isMobile ? 12 : 14 }}>
            Payment Status: <span style={{ color: getPaymentStatusColor(item.transaction?.status?.name), fontWeight: 600 }}>
              {item.transaction?.status?.name || "-"}
            </span>
          </p>
          <p style={{ margin: 2, fontSize: isMobile ? 12 : 14, display: "flex", alignItems: "center", gap: 4 }}>
            <FaClock /> Booking: {formatDateTime(item.booking_date)}
          </p>
        </div>

        <div style={{ marginBottom: 10, fontSize: isMobile ? 12 : 14 }}>
          <strong>Booked For:</strong> {item.whom === "Self" ? "Self" : item.cname}
        </div>

        {item.whom !== "Self" && (
          <div style={{ marginBottom: 10, fontSize: isMobile ? 12 : 14 }}>
            <p style={{ margin: 0 }}>Relation: {item.relation_with_client}</p>
            <p style={{ margin: 0 }}>Age: {item.age}</p>
          </div>
        )}

        <div style={{ marginTop: 10, fontSize: isMobile ? 12 : 14 }}>
          <strong>Notes:</strong>
          <p style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <FaNotesMedical /> {item.notes || "No notes available"}
          </p>
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {appointments.map((appt) => (
          <div
            key={appt._id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 16,
              borderRadius: 16,
              background: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
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
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <h6 style={{ margin: 0, fontSize: isMobile ? 14 : 16 }}>{appt.client?.name}</h6>
              <p style={{ margin: 0, fontSize: isMobile ? 12 : 14, color: "#555" }}>{appt.service} / {appt.format}</p>
              <p style={{ margin: 0, fontSize: isMobile ? 12 : 14, display: "flex", alignItems: "center", gap: 4 }}>
                <FaClock /> {formatDateTime(appt.booking_date)}
              </p>
              <p style={{ margin: 0, fontSize: isMobile ? 12 : 14 }}>
                Payment: <span style={{ color: getPaymentStatusColor(appt.transaction?.status?.name), fontWeight: 600 }}>{appt.transaction?.status?.name || "-"}</span>
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
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

      <ModalComponent open={open} handleClose={handleClose} content={modalContent} />
      <VerifyOtpDialog open={optView} onClose={handleOtpViewClose} placeholder="Enter Pin" label="Pin" value={pin} handleChange={handlePinChange} handleClick={handleVerifyOtp} loading={loading} />
    </>
  );
};

export default AppointmentsContent;
