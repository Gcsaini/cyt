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
import PageWrapper from "../../components/global/page-wrapper";

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
      <PageWrapper pageTitle={"Favrioute Therapist"} loading={loading}>
        <div className="row gy-5">
          {data && Object.keys(data).length > 0 ? (
           data.therapists.length>0 && data.therapists.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={item._id}>
                  <FavTherapistCard
                    data={item}
                    key={item._id}
                    removeFav={handleRemoveFav}
                  />
                </div>
              );
            })
          ) : (
            <h6>No Therapist Found</h6>
          )}
        </div>
      </PageWrapper>
    </UserLayout>
  );
}
