import { Route, Routes } from "react-router-dom";
import Case1 from "./pages/Case1";
import Case2 from "./pages/Case2";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-1" element={<Case1 />} />
      <Route path="/case-2" element={<Case2 />} />
    </Routes>
  );
}

export default App;
