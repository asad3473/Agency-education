import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "../src/contextApi/contextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-[1440px] mx-auto">
        <App />
      </div>
    </AuthProvider>
  </StrictMode>
);
