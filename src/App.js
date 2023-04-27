import Home from "./components/Home";
import Random from "./components/Random";
import Hello from "./components/Hello";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:value" element={<Random />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hello/:color1/:color2" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
