import React from "react";
import MainLayout from "../../components/therapists/main-layout";
import Appointment from "../../components/therapists/dashboard/appointment-main";
import Upcomingappointment from "../../components/therapists/dashboard/upcommingappointment";
import RecentInvoices from "../../components/therapists/dashboard/recentInvoices";
import Notification from "../../components/therapists/dashboard/notifications";
import PerformanceComponent from "../../components/therapists/dashboard/performance";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <PerformanceComponent />
       <Notification />
      <Upcomingappointment />
      <Appointment />

      <RecentInvoices />
    </MainLayout>
  );
}
