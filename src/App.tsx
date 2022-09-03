import { ChallengeProvider } from "./contexts/challenge";
import { I18nProvider } from "./i18n/config";
import { AppRoutes } from "./routes/AppRoutes";

import "./styles/global.css";

export function App() {
  return (
    <I18nProvider>
      <ChallengeProvider>
        <AppRoutes />
      </ChallengeProvider>
    </I18nProvider>
  );
}
