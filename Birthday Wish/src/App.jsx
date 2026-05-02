import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* dynamic name route */}
        <Route path="/:name" element={<Home />} />
        
        {/* fallback */}
        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}