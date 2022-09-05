import { ReactElement } from "react";
import { createI18n, I18nProvider as Provider } from "react-simple-i18n";
import ptBR from "./locales/pt.json";
import enUS from "./locales/en.json";

interface I18nProps {
  children: ReactElement;
}

export function I18nProvider({ children }: I18nProps) {
  const userLang =
    localStorage.getItem("@tagMemoryTest:lang") || navigator.language;

  const resources = {
    "pt-BR": ptBR,
    "en-US": enUS,
  };

  return (
    <Provider i18n={createI18n(resources, { lang: userLang })}>
      {children}
    </Provider>
  );
}
