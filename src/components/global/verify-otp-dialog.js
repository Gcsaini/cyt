import { Dialog, DialogActions, DialogContent } from "@mui/material";
import FormMessage from "./form-message";
import FormProgressBar from "./form-progressbar";

export default function VerifyOtpDialog({ value, error = "", success = "", placeholder = "Enter OTP", label = "OTP", handleChange, handleClick, loading,open,onClose }) {
    return <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
        <div style={{ padding: "8px" }}>
            <h5>{placeholder}</h5>
            <FormMessage success={success} error={error} />
            <DialogContent dividers>
                <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="otp">{label}*</label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        id="otp"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <div className="plceholder-button mt--10">
                    {loading ? (
                        <FormProgressBar />
                    ) : (
                        <button
                            className="rbt-btn btn-gradient hover-icon-reverse"
                            onClick={handleClick}
                        >
                            <span className="icon-reverse-wrapper">
                                <span className="btn-text">Submit</span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                </span>
                            </span>
                        </button>
                    )}
                </div>
            </DialogActions>
        </div>
    </Dialog>
}