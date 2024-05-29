import { render, screen } from "@testing-library/react";
import CardComponent from "../CardComponent";
import resList from "../../utils/mock-data";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render Card Component", () => {
    render(
        <BrowserRouter>
            <CardComponent resData={resList} />
        </BrowserRouter>);
    const CardName = screen.getByText("Pizza Hut");
    expect(CardName).toBeInTheDocument();
})