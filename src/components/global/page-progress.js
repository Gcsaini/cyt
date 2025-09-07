import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function PageProgressBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
      }}
    >
      <CircularProgress />
    </Box>
  );
}
