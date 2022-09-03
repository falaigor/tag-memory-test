import { useState } from "react";
import { Info } from "phosphor-react";
import { useI18n } from "react-simple-i18n";
import { DifficultyType, difficultyTypes } from "../../contexts/challenge";
import { useChallengeStore } from "../../../store/challenge";
import { Tooltip } from "../Tooltip";

export function SelectDifficulty() {
  const { t } = useI18n();
  const { difficultyChange } = useChallengeStore((store) => store.actions);
  const { difficulty } = useChallengeStore((store) => store.state);
  const [open, setOpen] = useState(false);

  return (
    <div data-testid="select-difficulty" className="py-5">
      <h4 className="text-2xl font-montserrat">
        {t("home.select-a-difficulty.title")}
      </h4>

      <div className="py-5">
        <div className="w-full border-t border-gray-900"></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-2">
        {Object.entries(difficultyTypes).map(([key, value]) => {
          return (
            <div className="w-full flex flex-col" key={key}>
              <button
                type="button"
                data-testid={`button-difficulty-${key.toLowerCase()}`}
                onClick={() => difficultyChange(key as DifficultyType)}
                className={`${
                  difficulty.type === (key as DifficultyType)
                    ? "bg-yellow-500 hover:bg-yellow-600 text-zinc-900 outline-2 border-4"
                    : "bg-blue-600 hover:bg-blue-700 text-zinc-100 border-0"
                } w-full flex p-4 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center transition-all`}
              >
                <span className="mx-2 font-montserrat">
                  {t(
                    `home.select-a-difficulty.difficulty.${
                      key as DifficultyType
                    }.title`
                  )}
                </span>
                <Tooltip
                  data-testid="tooltip"
                  tooltipMessage="Info"
                  onClick={() => setOpen(!open)}
                >
                  <Info weight="bold" />
                </Tooltip>
              </button>

              {open && difficulty.type === (key as DifficultyType) && (
                <p
                  data-testid="description"
                  className="mt-2 p-2 transition-all text-center"
                >
                  {t(
                    `home.select-a-difficulty.difficulty.${
                      key as DifficultyType
                    }.info`
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
