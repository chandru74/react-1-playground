import { screen, render } from "@testing-library/react";
import HeaderLayout from "../HeaderLayout";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should render HeaderLayout component with 0 cart items link", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderLayout />
            </Provider>
        </BrowserRouter>);
    const CartItems = screen.getByText("Cart - (0 items)");
    
    expect(CartItems).toBeInTheDocument();
})