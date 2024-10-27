import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CursorComponent from "./components/cursor/CursorComponent";
import Layout from "./page/layout/Layout";

function App() {
  return (
    <Router>
      <CursorComponent/>
      <div className="app">
        <Routes>
          <Route path="*" element={<Navigate to="/layout" replace />} />
          <Route path="/" element={<Navigate to="/layout" />} />
          <Route path="/layout" element={<Layout />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Conatct />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
