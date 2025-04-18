import { Box, Paper, Typography } from "@mui/material";
import ShiftForm from "../components/forms/ShiftForm";
import ShiftTable from "../components/tables/ShiftTable";

const ShiftsPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flex: 1,
          minWidth: 300,
          border: "1px solid #fd1010",
          borderRadius: 2,
        }}
      >
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Yeni Vardiya Belirle
          </Typography>
          <ShiftForm />
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <ShiftTable />
        </Paper>
      </Box>
    </Box>
  )
};

export default ShiftsPage;



