import { useMediaQuery } from "@mui/material";
import { Smile } from "lucide-react";

export default function DashboardWelcome({
  name = "Therapist",
  message = "Glad to see you back on your dashboard.",
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div
      className="dashboard-welcome"
      style={{
        background: "linear-gradient(135deg, #00b874 0%, #00d48a 100%)",
        color: "#fff",
        borderRadius: "12px",
        padding: isMobile ? "16px" : "20px 28px",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Smile size={28} strokeWidth={2.2} />
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: 600,
            }}
          >
            Welcome back, {name} 👋
          </h3>
          <p
            style={{
              margin: "4px 0 0 0",
              fontSize: isMobile ? "13px" : "14px",
              opacity: 0.9,
            }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
