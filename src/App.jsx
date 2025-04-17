import Home from "./pages/Home";
import ShiftsPage from "./pages/ShiftsPage";
import CyclesPage from "./pages/CyclesPage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shifts" element={<ShiftsPage />}/>
        <Route path="/cycles" element={<CyclesPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
