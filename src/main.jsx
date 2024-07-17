import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context.jsx";
import { AuthProvider } from "./components/config/AuthContext.jsx";
import { BookingProvider } from "./components/config/BookingContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <React.StrictMode>
      <ContextProvider>
      <BookingProvider>
          <App />
        </BookingProvider>
      </ContextProvider>
  </React.StrictMode>
  </AuthProvider>
);
