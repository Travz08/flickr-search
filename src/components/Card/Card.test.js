import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders hello world", () => {
  render(<Card />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
