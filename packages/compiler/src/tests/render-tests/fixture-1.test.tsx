import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// @ts-expect-error No type declaration
import TestComponent from "../fixtures/fixture_1";

describe("Fixture 1", () => {
  test("renders without errors", async () => {
    render(<TestComponent />);

    expect(screen.getByText("Hello world!")).toBeTruthy();
  });
});
