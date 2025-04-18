import { Box, Paper, Typography } from "@mui/material";
import CycleForm from "../components/forms/CycleForm";
import CycleTable from "../components/tables/CycleTable";
const CyclesPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
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
          flexDirection: "column",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flex: 1,
          minWidth: { xs: "300px", md: "400px" },
          borderRadius: 2,
          border: "1px solid",
          borderColor: "primary.main",
          padding:2,
          backgroundColor: "primary.light",
          boxShadow: 2,
        }}
      >
        <Paper sx={{ padding: 2, flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            Yeni Döngü Belirle
          </Typography>
          <CycleForm />
        </Paper>
        <Paper sx={{ padding: 2, flex: 1 }}>
          <CycleTable />
        </Paper>
      </Box>
    </Box>
  );
};

export default CyclesPage;
