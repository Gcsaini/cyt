import React from "react";
import MainLayout from "../../components/therapists/main-layout";
import Upcomingappointment from "../../components/therapists/dashboard/upcommingappointment";
import RecentInvoices from "../../components/therapists/dashboard/recentInvoices";
import Notification from "../../components/therapists/dashboard/notifications";
import PerformanceComponent from "../../components/therapists/dashboard/performance";
import TodayAppointment from "../../components/therapists/dashboard/todayappointment";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <PerformanceComponent />
      <Notification />
      <Upcomingappointment />
      <TodayAppointment />
      <RecentInvoices />
    </MainLayout>
  );
}
