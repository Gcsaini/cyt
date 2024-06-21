import MainLayout from "../../components/therapists/main-layout";
import TotalCounts from "../../components/therapists/dashboard/counts";
import MyCoursesTable from "../../components/therapists/dashboard/my-courses-table";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <TotalCounts />
      <MyCoursesTable />
    </MainLayout>
  );
}
