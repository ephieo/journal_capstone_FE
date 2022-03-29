import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/home";
import SavedQuotes from "./pages/saved_qoutes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quotes" element={<SavedQuotes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
