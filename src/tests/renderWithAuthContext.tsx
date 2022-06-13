import { render } from "@testing-library/react";
import { AuthContext } from "../contexts/auth";

export const renderWithAuthContext = (
  ui,
  providerProps,
  { ...renderOptions }
) => {
  return render(
    <AuthContext.Provider {...providerProps}>{ui}</AuthContext.Provider>,
    renderOptions
  );
};
