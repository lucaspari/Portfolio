import { Header } from "../../components/header/Header";
import { render } from "@testing-library/react";

describe("Header.tsx", () => {
  it("should render the header", () => {
    const container = render(<Header />);
    expect(container).toBeTruthy();
  });
});
