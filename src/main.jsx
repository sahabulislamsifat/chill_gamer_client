import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./utils/Router.jsx";
import AuthProvider from "./utils/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeProvider from "./utils/ThemeProvider.jsx";
AOS.init();
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
    <Toaster></Toaster>
    <Tooltip></Tooltip>
  </StrictMode>
);
