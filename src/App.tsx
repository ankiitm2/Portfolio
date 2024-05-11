import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import About from "./page/about/About";
// import Home from "./page/home/Home";
// import Projects from "./page/projects/Projects";
// import Conatct from "./page/contact/Contact";
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
