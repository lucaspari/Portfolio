import { render } from "@testing-library/react";
import App from "../App";
describe("App.tsx", () => {
  it("should render App.tsx", () => {
    const container = render(<App />);
    expect(container).toBeTruthy();
  });
});
