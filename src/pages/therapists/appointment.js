import { useEffect, useState } from "react";
import AppointmentTabHead from "../../components/therapists/appointment/appointment-tab-head";
import AppointmentPageSidebar from "../../components/therapists/appointment/appointmentheader";
import MainLayout from "../../components/therapists/main-layout";
import AppointmentsContent from "../../components/therapists/appointment/appointment-content";
import { toast } from "react-toastify";
import { fetchById } from "../../utils/actions";
import { getBookings } from "../../utils/url";
import PageProgressBar from "../../components/global/page-progress";

export default function AppointmentsPage() {
  const [data, setData] = useState([]);
  const [statusList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetchById(getBookings);
      if (res.status) {
        setData(res.data);
        setDataList(res.statuslist);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayout>
        {/* <AppointmentPageSidebar /> */}
        {/* <AppointmentTabHead /> */}
        {loading ? <PageProgressBar /> : data && data.length > 0 && <AppointmentsContent appointments={data} statusList={statusList} onRefresh={getData}/>}
      </MainLayout>
  );
}
