import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ChallengeContext } from "../contexts/challenge";

export const renderWithChallengeContext = (
  ui,
  providerProps,
  { ...renderOptions }
) => {
  return render(
    <ChallengeContext.Provider {...providerProps}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ChallengeContext.Provider>,
    renderOptions
  );
};
