import React, { useState } from "react";
import UserLayout from "../../components/dashboard/user-layout";
import { fetchById } from "../../utils/actions";
import { getBookings, GetFavriouteTherapistUrl } from "../../utils/url";
import PageWrapper from "../../components/global/page-wrapper";
import CreateTable from "../../components/global/create-table";
import { toast } from "react-toastify";
const columns = [
  "Therapist",
  "Format",
  "Booked For",
  "Name",
  "Age",
  "Pin",
  "Notes",
  "Payment Status",
];

export default function MyBookingsPage() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await fetchById(getBookings);
      if (res.status) {
        setData(res.data);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <UserLayout>
      <PageWrapper pageTitle={"My Bookings"} loading={loading}>
        <div className="row gy-5">
          {data && data.length > 0 ? (
            <CreateTable columns={columns}>
              {data.map((item) => {
                return (
                  <tr>
                    <th>{item.therapist.name}</th>
                    <td>{item.format}</td>
                    <td>{item.whom}</td>
                    <td>
                      {item.whom === "Self" ? item.client.name : item.cname}
                    </td>
                    <td>{item.whom === "Self" ? item.user_age : item.age}</td>
                    <td>{item.otp}</td>
                    <td title={item.notes}>
                      {item.notes?.length > 20
                        ? item.notes.substring(0, 20) + "..."
                        : item.notes}
                    </td>
                    <td>
                      {item.is_payment_success ? "Verified" : "Not Verified"}
                    </td>
                  </tr>
                );
              })}
            </CreateTable>
          ) : (
            <h6>No Booking Found</h6>
          )}
        </div>
      </PageWrapper>
    </UserLayout>
  );
}
