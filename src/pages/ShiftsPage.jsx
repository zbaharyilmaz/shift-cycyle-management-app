import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ShiftForm from "../components/forms/ShiftForm";
import ShiftTable from "../components/tables/ShiftTable";

const ShiftsPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginLeft: { sm: "240px", xs: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          flex: 1,
          minWidth: { xs: "300px", md: "400px" },
          borderRadius: 2,
          border: "1px solid",
          borderColor: "primary.main",
          padding: 2,
          backgroundColor: "primary.light",
          boxShadow: 2,
        }}
      >
        <Paper sx={{ padding: 2, flex: 1, width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Yeni Vardiya Belirle
          </Typography>
          <ShiftForm />
        </Paper>
        <Paper sx={{ padding: 2, flex: 1, width: "100%" }}>
          <ShiftTable />
        </Paper>
      </Box>
    </Box>
  );
};

export default ShiftsPage;
