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
import {
  FaPlay,
  FaStop,
  FaUser,
  FaNotesMedical,
  FaClock,
  FaTimes,
  FaPhone,
  FaCheck,
} from "react-icons/fa";

const AppointmentsContent = ({ appointments: initialAppointments, onRefresh }) => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [open, setOpen] = useState(false);
  const [otpView, setOtpView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [sessionEnding, setSessionEnding] = useState(false);
  const [pin, setPin] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

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
      <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 16 }}>
        <FaTimes
          onClick={handleClose}
          style={{
            position: "sticky",
            top: 0,
            alignSelf: "flex-end",
            cursor: "pointer",
            fontSize: 20,
            color: "#333",
          }}
        />
        <h3
          style={{
            background: "linear-gradient(135deg, #00b874, #00d2ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Appointment Details
        </h3>
        {/* client details etc... */}
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

        setAppointments((prev) =>
          prev.map((appt) =>
            appt._id === bookingId ? { ...appt, status: SESSION_STATUS.STARTED } : appt
          )
        );
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

        setAppointments((prev) =>
          prev.map((appt) =>
            appt._id === item._id ? { ...appt, status: SESSION_STATUS.COMPLETED } : appt
          )
        );
        onRefresh && onRefresh();
      } else toast.error(response.message);
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setSessionEnding(false);
    }
  };

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  const visibleAppointments = appointments.slice(0, visibleCount);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {visibleAppointments.map((appt) => {
          const isPremium = appt.status === SESSION_STATUS.STARTED;

          // Client ke liye session number calculate karna
          const sessionNumber = appointments.filter(
            (a) =>
              a.client?._id === appt.client?._id &&
              new Date(a.booking_date) <= new Date(appt.booking_date)
          ).length;

          return (
            <div
              key={appt._id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 18,
                borderRadius: 16,
                background: "#fff",
                boxShadow: isPremium
                  ? "0 12px 25px rgba(0,200,255,0.25)"
                  : "0 8px 20px rgba(0,0,0,0.1)",
                border: isPremium ? "2px solid #00b874" : "1px solid #eee",
              }}
            >
              {/* Name + badges inline */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <h6 style={{ margin: 0, fontSize: 16 }}>{appt.client?.name}</h6>
                <div style={{ display: "flex", gap: 6 }}>
                  <span
                    style={{
                      padding: "2px 6px",
                      borderRadius: 12,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#fff",
                      background: "#00b874",
                    }}
                  >
                    Session {sessionNumber}
                  </span>
                  <span
                    style={{
                      padding: "2px 6px",
                      borderRadius: 12,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#fff",
                      background:
                        appt.status === SESSION_STATUS.STARTED
                          ? "linear-gradient(135deg,#00b874,#00d2ff)"
                          : appt.status === SESSION_STATUS.COMPLETED
                          ? "linear-gradient(135deg,#007bff,#00d2ff)" // ✅ Completed badge only
                          : "#ffc107",
                    }}
                  >
                    {appt.status === SESSION_STATUS.COMPLETED
                      ? "Completed"
                      : appt.status}
                  </span>
                </div>
              </div>

              <p style={{ margin: "4px 0", fontSize: 14 }}>
                {appt.service} / {appt.format}
              </p>
              <p style={{ margin: "4px 0", fontSize: 14 }}>
                <FaClock /> {formatDateTime(appt.booking_date)}
              </p>
              <p style={{ margin: "4px 0", fontSize: 14 }}>
                Payment:{" "}
                <span
                  style={{
                    color: getPaymentStatusColor(appt.transaction?.status?.name),
                    fontWeight: 600,
                  }}
                >
                  {appt.transaction?.status?.name || "-"}
                </span>
              </p>

              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                {/* View button */}
                <button
                  onClick={() => handleView(appt)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    background: "#f0f0f0",
                    border: "1px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                  }}
                >
                  <FaUser /> View
                </button>

                {/* Session actions */}
                {appt.status !== SESSION_STATUS.COMPLETED &&
                appt.status !== SESSION_STATUS.CANCELED ? (
                  appt.status === SESSION_STATUS.STARTED ? (
                    sessionEnding ? (
                      <Box>
                        <CircularProgress size={26} />
                      </Box>
                    ) : (
                      <button
                        onClick={() => endSession(appt)}
                        style={{
                          padding: "8px 14px",
                          borderRadius: 8,
                          background: "linear-gradient(135deg,#ff4d4f,#ff7a5c)",
                          color: "#fff",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 14,
                        }}
                      >
                        <FaStop /> End
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => handlePin(appt)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 8,
                        background: "linear-gradient(135deg,#00b874,#00d2ff)",
                        color: "#fff",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 14,
                      }}
                    >
                      <FaPlay /> Start
                    </button>
                  )
                ) : (
                  <button
                    disabled
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      background: "#007bff", // ✅ Normal blue button for Completed
                      color: "#fff",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 14,
                    }}
                  >
                    <FaCheck /> Completed
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {visibleCount < appointments.length && (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: "10px 20px",
              borderRadius: 10,
              background: "linear-gradient(135deg,#00b874,#00d2ff)",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Load More
          </button>
        </div>
      )}

      <ModalComponent open={open} handleClose={handleClose} content={modalContent} />
      <VerifyOtpDialog
        open={otpView}
        onClose={handleOtpViewClose}
        placeholder="Enter Pin"
        label="Pin"
        value={pin}
        handleChange={handlePinChange}
        handleClick={handleVerifyOtp}
        loading={loading}
      />
    </>
  );
};

export default AppointmentsContent;
