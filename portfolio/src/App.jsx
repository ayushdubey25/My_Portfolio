import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <Router>
      <div>
        <AnimatePresence mode="wait">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/contacts" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
