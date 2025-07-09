import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SukoonVillaPage from "./SukoonVillaPage"
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sukoon-villa" element={<SukoonVillaPage />} />
      </Routes>
    </Router>
  );
}

