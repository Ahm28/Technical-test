import { Route, Routes } from "react-router-dom";
import Case1 from "./pages/Case1";
import Case2 from "./pages/Case2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Case1 />} />
      <Route path="/case-2" element={<Case2 />} />
    </Routes>
  );
}

export default App;
