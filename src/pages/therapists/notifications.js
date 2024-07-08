import React from "react";
import MainLayout from "../../components/therapists/main-layout";
import Notification from "../../components/therapists/dashboard/notifications";
export default function TherapistDashboard() {
  return (
    <MainLayout>
      <Notification />
    </MainLayout>
  );
}
