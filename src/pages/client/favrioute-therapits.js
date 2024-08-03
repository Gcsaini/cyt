import React, { useState } from "react";
import UserLayout from "../../components/dashboard/user-layout";
import FavTherapistCard from "../../components/dashboard/fav-therapist-card";
import FormProgressBar from "../../components/global/form-progressbar";
import { fetchById, postData } from "../../utils/actions";
import {
  GetFavriouteTherapistUrl,
  RemoveFavriouteTherapistUrl,
} from "../../utils/url";
import { errorColor } from "../../utils/colors";

export default function FavriouteTherapistPage() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const getData = async () => {
    try {
      const res = await fetchById(GetFavriouteTherapistUrl);
      if (res.status) {
        setData(res.data);
      } else {
        setError(res.message);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleRemoveFav = async (id) => {
    setError("");
    const filter = data.filter((item) => item._id !== id);
    setData(filter);
    try {
      const response = await postData(RemoveFavriouteTherapistUrl, {
        therapistId: id,
      });
      if (!response.status) {
        setError(response.message);
        getData();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <UserLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">
              Favrioute Therapist
              <p style={{ fontSize: 16, color: errorColor }}>{error}</p>
            </h4>
          </div>
          {loading ? (
            <FormProgressBar />
          ) : (
            <div className="row gy-5">
              {data &&
                data.length > 0 &&
                data.map((item) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-12" key={item._id}>
                      <FavTherapistCard
                        data={item}
                        key={item._id}
                        removeFav={handleRemoveFav}
                      />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
}
