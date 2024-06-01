import CircularProgress from "@mui/material/CircularProgress";
export default function PageLoading() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
