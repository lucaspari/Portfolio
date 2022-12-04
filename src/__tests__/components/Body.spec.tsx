import { render } from "@testing-library/react";
import { Body } from "../../components/body/Body";
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
it("renders Body.tsx", () => {
  const container = render(<Body />);
  expect(container).toBeTruthy();
});
