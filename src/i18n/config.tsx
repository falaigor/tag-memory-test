import { ReactElement } from "react";
import { createI18n, I18nProvider as Provider } from "react-simple-i18n";
import ptBR from "./locales/pt.json";
import enUS from "./locales/en.json";

interface I18nProps {
  children: ReactElement;
}

export function I18nProvider({ children }: I18nProps) {
  const resources = {
    "pt-br": ptBR,
    "en-us": enUS,
  };

  return (
    <Provider i18n={createI18n(resources, { lang: "pt-br" })}>
      {children}
    </Provider>
  );
}
