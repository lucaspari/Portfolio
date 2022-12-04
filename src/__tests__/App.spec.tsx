import { render } from "@testing-library/react";
import App from "../App";
jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
describe("App.tsx", () => {
  it("should render App.tsx", () => {
    const container = render(<App />);
    expect(container).toBeTruthy();
  });
});
