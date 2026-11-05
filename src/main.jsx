import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toast } from "./components/Toast.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toast>
      <App />
    </Toast>
  </StrictMode>,
);
