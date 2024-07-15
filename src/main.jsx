import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context.jsx";
import { AuthProvider } from "./components/config/AuthContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
  </React.StrictMode>
  </AuthProvider>
);
