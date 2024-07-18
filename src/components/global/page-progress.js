import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function PageProgressBar() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}
