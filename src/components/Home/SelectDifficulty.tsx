import { Info } from "phosphor-react";
import { DifficultyType, difficultyTypes } from "../../contexts/challenge";
import { useChallengeStore } from "../../store/challenge";

export function SelectDifficulty() {
  const { difficultyChange } = useChallengeStore((store) => store.actions);
  const { difficulty } = useChallengeStore((store) => store.state);

  return (
    <div className="py-5">
      <h4 className="text-2xl font-montserrat">Select a difficulty</h4>

      <div className="py-5">
        <div className="w-full border-t border-gray-900"></div>
      </div>

      <div className="flex flex-row gap-2">
        {Object.entries(difficultyTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              data-testid="button"
              type="button"
              onClick={() => difficultyChange(key as DifficultyType)}
              className={`${
                difficulty.type === (key as DifficultyType)
                  ? "bg-yellow-500 hover:bg-yellow-600 text-zinc-900"
                  : "bg-blue-600 hover:bg-blue-700 text-zinc-100"
              } w-full flex p-4 border-0 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center transition-all`}
            >
              <span className="mx-2">{value.title}</span>
              <Info weight="bold" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
