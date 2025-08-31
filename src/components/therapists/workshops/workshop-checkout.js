import React, { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./checkout-styles.css";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogActions,
} from "@mui/material";
import WorkshopCheckoutCard from "./workshop-checkout-card";
import { bookWorkshopUrl, verifyOtpUrl } from "../../../utils/url";
import useUserStore from "../../../store/userStore";
import FormProgressBar from "../../global/form-progressbar";
import { postData } from "../../../utils/actions";
import FormMessage from "../../global/form-message";
const styles = {
    iconStyle: {
        fontSize: 12,
        width: 20,
        height: 20,
    },
    listStyle: {
        lineHeight: "18px",
        marginBottom: 0,
    },
    selectedIconStyle: {
        fontSize: 12,
        width: 20,
        height: 20,
        backgroundColor: "#fff",
        color: "#2d54e6",
        boxShadow: "0 0 10px rgba(0,0,0,.1)",
    },
    selectStyle: { lineHeight: "20px", height: "50px" },
};
export default function WorkshopCheckout({ data }) {
    const { userInfo } = useUserStore();
    const navigate = useNavigate();
    const [error, setError] = React.useState("");
    const [otpError, setOtpError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [otp, setOtp] = React.useState("");
    const [bookingId, setBookingId] = React.useState();

    const [info, setInfo] = React.useState({
        name: userInfo.name || "",
        phone: "",
        email: "",
        amount: "",
        is_student: false,
        program_name: "",
        institution_name: "",
        therapist: "",
        is_logged_in: false,
        user_id: "",
        workshopId: ""
    });



    const handleStudentChange = (e) => {
        setInfo((prev) => ({
            ...prev,
            is_student: e.target.value === "yes"
        }));
    };

    const handleChange = (name, value) => {
        if (name === "name" || name === "email" || name === "program_name" || name === "institution_name") {
            setInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value,
            }));
        } else if (name === "phone") {
            const formattedValue = value.replace(/\D/g, "");
            if (formattedValue.length <= 10) {
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    [name]: formattedValue,
                }));
            }
        }
        else if (name === "otp") {
            const formattedValue = value.replace(/\D/g, "").slice(0, 6);
            setOtp(formattedValue);
        } else {
            setInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async () => {
        setSuccess("");
        if (!info.is_logged_in && info.name.length === "") {
            setError("Please enter name");
            return;
        } else if (!info.is_logged_in && info.phone.length !== 10) {
            setError("Please enter phone number");
            return;
        }
        else if (!info.is_logged_in && !userInfo.email && info.email === "") {
            setError("Please Enter Email id.");
            return;
        } else if (info.is_student && info.program_name.length < 4) {
            setError("Please enter valid program name.");
            return;
        } else if (info.is_student && info.institution_name === "") {
            setError("Please select relation with client.");
            return;
        } else {
            setError("");
            setLoading(true);
            try {
                setLoading(true);

                const response = await postData(bookWorkshopUrl, info);
                if (response.status) {
                    setBookingId(response.data.id);
                    setOpen(true);

                } else {
                    setError(response.message);

                }
            } catch (error) {
                console.log(error);
                setError(error?.response?.data?.message);
            }
            setLoading(false);
        }
    };

    const onClose = () => {
        setOpen(false);
    }

    const verifyOtp = async () => {
        setOtpError("");
        if (otp.length !== 6) {
            setOtpError("Please enter valid OTP");
            return;
        }
        let email = info.email;
        const value = {
            email,
            otp,
        };
        try {
            setLoading(true);
            const response = await postData(verifyOtpUrl, value);
            if (response.status) {
                setOtpError("");
                setOtp("");
                navigate(`/workshop-pending/${bookingId}`);
            } else {
                setOtpError(response.message);
            }
        } catch (error) {
            setSuccess("");
            setOtpError(error.response.data.message);
        }
        setLoading(false);
    };

    const setConfigFn = async (data) => {
        setInfo((prev) => ({
            ...prev,
            therapist: data.post_by._id,
            amount: data.price,
            is_logged_in: userInfo.email ? true : false,
            user_id: userInfo._id || "",
            workshopId: data._id,
            email: userInfo.email || "",
        }));
    }
    useEffect(() => {
        setConfigFn(data);
    }, [data]);


    return (
        <div className="checkout_area bg-color-white ">
            <div className="container">
                <div className="row g-5 checkout-form">
                    <div className="col-lg-7">
                        <WorkshopCheckoutCard pageData={data} />
                        <div className="checkout-content-wrapper mt--20">
                            <div id="billing-form">
                                <h4 className="checkout-title">Billing Address</h4>
                                <FormMessage success={success} error={error} />
                                <div className="row mt--15">
                                    <div className="row mt--15">
                                        <label htmlFor="">Are you student?</label>
                                        <div className="col-2 mb--10">
                                            <div className="single-method">
                                                <input
                                                    type="radio"
                                                    id="student_no"
                                                    name="is_student"
                                                    value="no"
                                                    checked={info.is_student === false}
                                                    onChange={handleStudentChange}
                                                />
                                                <label htmlFor="student_no">No</label>
                                            </div>
                                        </div>
                                        <div className="col-2 mb--10">
                                            <div className="single-method">
                                                <input
                                                    type="radio"
                                                    id="student_yes"
                                                    name="is_student"
                                                    value="yes"
                                                    checked={info.is_student === true}
                                                    onChange={handleStudentChange}
                                                />
                                                <label htmlFor="student_yes">Yes</label>
                                            </div>
                                        </div>

                                    </div>
                                    {!info.is_logged_in &&
                                        <> <div className="col-md-6 col-12 mb--10">
                                            <label htmlFor="name">Full Name*</label>
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                value={info.name}
                                                id="name"
                                                name="name"
                                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            />
                                        </div>

                                            <div className="col-md-6 col-12 mb--10">
                                                <label htmlFor="phone">Whatsapp no*</label>
                                                <input
                                                    type="text"
                                                    placeholder="Whatsapp number"
                                                    id="phone"
                                                    name="phone"
                                                    value={info.phone || ""}
                                                    onChange={(e) =>
                                                        handleChange(e.target.name, e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-6 col-12 mb--10">
                                                <label htmlFor="phone">Email*</label>
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    id="email"
                                                    name="email"
                                                    value={info.email}
                                                    onChange={(e) =>
                                                        handleChange(e.target.name, e.target.value)
                                                    }
                                                />
                                            </div>
                                        </>}

                                    {info.is_student && <>

                                        <div className="col-md-6 col-12 mb--10">
                                            <label htmlFor="phone">Program Name*</label>
                                            <input
                                                type="text"
                                                placeholder="Program Name"
                                                id="program_name"
                                                name="program_name"
                                                value={info.program_name}
                                                onChange={(e) =>
                                                    handleChange(e.target.name, e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-md-6 col-12 mb--10">
                                            <label htmlFor="phone">Institution Name*</label>
                                            <input
                                                type="text"
                                                placeholder="Institution Name"
                                                id="institution_name"
                                                name="institution_name"
                                                value={info.institution_name}
                                                onChange={(e) =>
                                                    handleChange(e.target.name, e.target.value)
                                                }
                                            />
                                        </div>
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">

                        <div className="col-12 mb--30">
                            <div className="checkout-cart-total">
                                <h4>
                                    Product <span>Total</span>
                                </h4>
                                <ul>
                                    <li>
                                        {data.title}&nbsp;
                                        <span>₹{info.amount}</span>
                                    </li>
                                </ul>
                                <p>
                                    Tax <span>0</span>
                                </p>
                                <p>
                                    Sub Total<span>₹{info.amount}</span>
                                </p>

                                <h4 className="mt--30">
                                    Grand Total <span>₹{info.amount}</span>
                                </h4>
                            </div>
                        </div>
                        <div className="plceholder-button mt--10">
                            {loading ? (
                                <FormProgressBar />
                            ) : (
                                <button
                                    className="rbt-btn btn-gradient hover-icon-reverse"
                                    onClick={handleSubmit}
                                >
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Continue</span>
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
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
                <div style={{ padding: "8px" }}>
                    <h5>Enter OTP</h5>
                    <FormMessage success={success} error={otpError} />
                    <DialogContent dividers>
                        <div className="col-md-6 col-12 mb--10">
                            <label htmlFor="phone">OTP*</label>
                            <input
                                type="text"
                                placeholder="OTP"
                                id="otp"
                                value={otp}
                                name="otp"
                                onChange={(e) =>
                                    handleChange(e.target.name, e.target.value)
                                }
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
                                    onClick={verifyOtp}
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
        </div>
    );
}
