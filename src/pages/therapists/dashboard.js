import React from "react";
import MainLayout from "../../components/therapists/main-layout";
import Upcomingappointment from "../../components/therapists/dashboard/upcommingappointment";
import PerformanceComponent from "../../components/therapists/dashboard/performance";
import TodayAppointment from "../../components/therapists/dashboard/todayappointment";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <PerformanceComponent />
          <Upcomingappointment />
          <TodayAppointment />
        </div>
      </div>
    </MainLayout>
  );
}
