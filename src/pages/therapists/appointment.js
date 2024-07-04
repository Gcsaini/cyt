import AppointmentTabContent from "../../components/therapists/appointment-sidebar/appointment-tab-content";
import AppointmentTabHead from "../../components/therapists/appointment-sidebar/appointment-tab-head";
import AppointmentPageSidebar from "../../components/therapists/appointment-sidebar/appointmentheader";
import MainLayout from "../../components/therapists/main-layout";

export default function Appointment() {
  return (
    <>
      <MainLayout>
        <AppointmentPageSidebar />
        <AppointmentTabHead />
        <AppointmentTabContent />
      </MainLayout>
    </>
  );
}
