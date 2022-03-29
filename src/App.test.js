import { render, screen } from "@testing-library/react";
import Home from "./pages/home";

test("renders page navbar", () => {
  render(<Home />);
  const navbar = screen.getByText(/journal/i);
  expect(navbar).toBeInTheDocument();
});

test("renders page footer", () => {
  render(<Home />);
  const all_posts = screen.getByText(/all posts/i);
  const quote = screen.getByText(/quote of the day/i);
  expect(all_posts).toBeInTheDocument();
  expect(quote).toBeInTheDocument();
});
