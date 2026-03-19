import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Homee } from "../src/pages/Home/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homee />
  </StrictMode>,
);
