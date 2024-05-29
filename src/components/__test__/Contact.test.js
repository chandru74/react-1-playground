import {render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes.length).toBe(2)
})