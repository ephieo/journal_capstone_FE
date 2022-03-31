import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/home";
import AddPostForm from "./pages/addPost";
import SavedQuotes from "./pages/savedQoutes";
import PostPage from "./pages/PostPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/quotes" element={<SavedQuotes />} />
          <Route exact path="/post/:id" element={<PostPage />} />
          <Route exact path="/add-post" element={<AddPostForm />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
