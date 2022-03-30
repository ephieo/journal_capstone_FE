import { render, screen } from "@testing-library/react";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

test("renders page navbar", () => {
  render(
    <Router>
      <Routes>
        <Route path="*" element={<NavBar />}></Route>
      </Routes>
    </Router>
  );
  const navbar = screen.getByText(/journal/i);
  expect(navbar).toBeInTheDocument();
});

test("renders page footer", () => {
  render(
    <Router>
      <Routes>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
  const all_posts = screen.getByText(/All Posts/i);
  const quote = screen.getByText(/Quote of the day/i);
  expect(all_posts).toBeInTheDocument();
  expect(quote).toBeInTheDocument();
});
