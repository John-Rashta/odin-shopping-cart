import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from '../App.jsx';
import {BrowserRouter} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    it("renders Homepage properly", () => {
      const container = render(<App />, {wrapper: BrowserRouter});
      expect(container).toMatchSnapshot();
    }); 

    it("renders cart properly", async () => {
        render(<App />, {wrapper: BrowserRouter});
        const user = userEvent.setup();
        const showButton = screen.getByText("Cart");

        await user.click(showButton);

        expect(screen.getByText("No Items").textContent).toMatch("No Items");

    }); 
});