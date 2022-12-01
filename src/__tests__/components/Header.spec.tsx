import { Header } from "../../components/header/Header";
import { fireEvent, render, waitFor } from "@testing-library/react";
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
  console.log(container);
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
