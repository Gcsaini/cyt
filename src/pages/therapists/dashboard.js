import MainLayout from "../../components/therapists/main-layout";
import TotalCounts from "../../components/therapists/dashboard/counts";
import Appointment from "../../components/therapists/dashboard/appointment";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <TotalCounts />
      <Appointment />
    </MainLayout>
  );
}
