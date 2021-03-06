import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AuthProvider } from "./contexts/auth";
import { ChallengeProvider } from "./contexts/challenge";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChallengeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChallengeProvider>
  </React.StrictMode>
);
