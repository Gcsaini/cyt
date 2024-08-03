import React, { useState } from "react";
import { postData } from "../../utils/actions";
import { changeClientPasswordUrl, changePasswordUrl } from "../../utils/url";
import FormMessage from "../global/form-message";
import FormProgressBar from "../global/form-progressbar";
import { removeToken } from "../../utils/jwt";
import { useNavigate } from "react-router-dom";
import FavTherapistCard from "./fav-therapist-card";
export default function MyTherapist() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    password: "",
    npassword: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="row gy-5">
      <FavTherapistCard />
    </div>
  );
}
