import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import i18n from "./i18n";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
