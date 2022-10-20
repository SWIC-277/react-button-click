import { render, screen } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";

describe("ButtonCounter", () => {
  it("renders the button with the correct text", () => {
    // Arrange
    const txt = "Click me";
    render(<ButtonCounter txt={txt} />);

    // Act
    const button = screen.getByRole("button", { name: txt });

    // Assert
    expect(button).toBeInTheDocument();
  });
});
