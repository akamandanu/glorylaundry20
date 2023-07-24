import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Note the addition of 'Routes'
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import LayananPages from "./pages/LayananPages";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes> {/* Use the 'Routes' component as a parent */}
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<LayananPages />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
