import { Header } from "../../components/header/Header";
import { fireEvent, render, waitFor } from "@testing-library/react";
import i18n from "../../i18n";
const tSpy = jest.fn((str) => str);
jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: tSpy,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
let theme = "light";
let toggleColorMode = jest.fn();
jest.mock("@chakra-ui/react", () => {
  return {
    ...jest.requireActual("@chakra-ui/react"),
    useColorMode: () => ({
      colorMode: theme,
      toggleColorMode: toggleColorMode,
    }),
  };
});

it("should render the header", () => {
  const { container } = render(<Header />);
  expect(container).toBeTruthy();
});
it("it renders Sun Icon", () => {
  theme = "dark";
  const { queryByTestId } = render(<Header />);
  expect(queryByTestId("sun")).toBeTruthy();
  expect(queryByTestId("moon")).not.toBeInTheDocument();
});
it("renders moon icon", () => {
  const { getByTestId } = render(<Header />);
  fireEvent.click(getByTestId("boxButton"));
  waitFor(() => {
    expect(getByTestId("moon")).toBeInTheDocument();
    expect(getByTestId("sun")).not.toBeInTheDocument();
  });
});
it("should trigger change language on Brazil Flag", () => {
  const { getByTestId } = render(<Header />);
  fireEvent.click(getByTestId("brazil"));
  waitFor(() => {
    expect(tSpy).toHaveBeenCalled();
  });
});
it("should trigger change language on Eua Flag", () => {
  const { getByTestId } = render(<Header />);
  fireEvent.click(getByTestId("eua"));
  waitFor(() => {
    expect(tSpy).toHaveBeenCalled();
  });
});
