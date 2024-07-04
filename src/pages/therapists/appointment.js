import React, { useState } from "react";
import AppointmentCancelled from "../../components/therapists/appointment-sidebar/appointment-cancelled";
import AppointmentCompleted from "../../components/therapists/appointment-sidebar/appointment-completed";
import AppointmentTabContent from "../../components/therapists/appointment-sidebar/appointment-tab-content";
import AppointmentTabHead from "../../components/therapists/appointment-sidebar/appointment-tab-head";
import AppointmentPageSidebar from "../../components/therapists/appointment-sidebar/appointmentheader";
import MainLayout from "../../components/therapists/main-layout";

export default function Appointment() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const renderContent = () => {
    switch (activeTab) {
      case "upcoming":
        return <AppointmentTabContent />;
      case "cancelled":
        return <AppointmentCancelled />;
      case "completed":
        return <AppointmentCompleted />;
      default:
        return <AppointmentTabContent />;
    }
  };

  return (
    <>
      <MainLayout>
        <AppointmentPageSidebar />
        <AppointmentTabHead setActiveTab={setActiveTab} />
        {renderContent()}
      </MainLayout>
    </>
  );
}
