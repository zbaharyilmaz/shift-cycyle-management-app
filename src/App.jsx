import { lazy, Suspense } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const ShiftsPage = lazy(() => import("./pages/ShiftsPage"));
const CyclesPage = lazy(() => import("./pages/CyclesPage"));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      marginLeft: { sm: "240px", xs: 0 },
    }}
  >
    <CircularProgress size={60} />
  </Box>
);

function App() {
  return (
    <Router>
      <Sidebar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shifts" element={<ShiftsPage />}/>
          <Route path="/cycles" element={<CyclesPage />}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
