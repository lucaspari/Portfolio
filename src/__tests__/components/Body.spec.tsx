import { render } from "@testing-library/react";
import { Body } from "../../components/body/Body";

it("renders Body.tsx", () => {
  const container = render(<Body />);
  expect(container).toBeTruthy();
});
