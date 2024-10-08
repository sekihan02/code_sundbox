import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
    </BrowserRouter>
  );
}
