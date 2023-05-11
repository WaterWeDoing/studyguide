import React from "react";
import ReactDOM from "react-dom/client";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
