import { render } from "@testing-library/react";
import { ChallengeContext } from "../contexts/challenge";

export const renderWithChallengeContext = (
  ui,
  providerProps,
  { ...renderOptions }
) => {
  return render(
    <ChallengeContext.Provider {...providerProps}>
      {ui}
    </ChallengeContext.Provider>,
    renderOptions
  );
};
