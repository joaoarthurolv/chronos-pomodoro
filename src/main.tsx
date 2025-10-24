import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Heading } from "./components/Heading";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Heading attr={123} attr2="String">
      Olá mundo 1
    </Heading>
    <App />
  </StrictMode>
);
