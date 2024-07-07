import React from "react";
import MainLayout from "../../components/therapists/main-layout";
import TotalCounts from "../../components/therapists/dashboard/counts";
import Appointment from "../../components/therapists/dashboard/appointment-main";
import Upcomingappointment from "../../components/therapists/dashboard/upcommingappointment";
import RecentInvoices from "../../components/therapists/dashboard/recentInvoices";
import Notification from "../../components/therapists/dashboard/notifications";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <TotalCounts />
     
      {/*  <Notification />*/}
      <Upcomingappointment />
      <Appointment />
     
      <RecentInvoices />
    </MainLayout>
  );
}
