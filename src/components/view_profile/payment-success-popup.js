import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../therapists/Modal/Modal-component";
const {
  DialogTitle,
  DialogContent,
  DialogActions,
} = require("@mui/material");

export default function PaymentSuccessModal({ open, onClose }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        navigate("/");
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [open, navigate]);
  return (
    <ModalComponent open={open} onClose={onClose} width="50%">
      <DialogTitle>
        <h5 className="price-title" style={{ fontSize: "16px" }}>
          Payment Recevide🎉
        </h5>{" "}
      </DialogTitle>
      <DialogContent>
        <h6 className="price-title" style={{ fontSize: "16px" }}>
          Your payment has been successfully processed. Thank you!
        </h6>
        <h6 className="price-title" style={{ fontSize: "16px" }}>
          Redirecting to home in 15 seconds...
        </h6>
      </DialogContent>
      <DialogActions>
        <button
          className="rbt-btn btn-gradient hover-icon-reverse"
          onClick={handleNavigate}
        >
          <span className="icon-reverse-wrapper">
            <span className="btn-text">OK</span>
            <span className="btn-icon">
            </span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        </button>
      </DialogActions>
    </ModalComponent>
  );
}
