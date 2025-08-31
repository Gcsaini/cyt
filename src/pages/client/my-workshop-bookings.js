import React, { useState } from "react";
import UserLayout from "../../components/dashboard/user-layout";
import { fetchById } from "../../utils/actions";
import {   GetMyWorkshopBooking} from "../../utils/url";
import PageWrapper from "../../components/global/page-wrapper";
import CreateTable from "../../components/global/create-table";
import { toast } from "react-toastify";
const columns = [
  "Posted By",
  "Category",
  "Title",
  "Level",
  "Event Date",
  "Paid Amount",
  "Language",
  "Payment Status",
];

export default function MyWorkshopBookingsPage() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await fetchById(GetMyWorkshopBooking);
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
      <PageWrapper pageTitle={"My Events"} loading={loading}>
        <div className="row gy-5">
          {data && data.length > 0 ? (
            <CreateTable columns={columns}>
              {data.map((item) => {
                return (
                  <tr>
                    <th>{item.workshop.post_by.user.name}</th>
                    <td>{item.workshop.category}</td>
                    <td title={item.workshop.title}>{item.title?.length > 20
                        ? item.workshop.title.substring(0, 20) + "..."
                        : item.workshop.title}</td>
                    <td>
                      {item.workshop.level}
                    </td>
                    <td>{item.workshop.event_date}</td>
                    <td>{item.amount}</td>
                    <td title={item.workshop.language}>
                      {item.workshop.language}
                    </td>
                    <td>
                      {item.transaction.status.name}
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
