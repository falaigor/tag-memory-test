import { useChallenge } from "../../contexts/challenge";

export function SelectDifficulty() {
  const { difficultyType, setDifficultyType } = useChallenge();

  function handleClick(key: string) {
    setDifficultyType(key);
  }

  return (
    <div className="py-5">
      <h4 className="text-2xl font-montserrat">Select a difficulty</h4>

      <div className="py-5">
        <div className="w-full border-t border-gray-900"></div>
      </div>

      <div className="flex flex-row gap-2">
        <button
          data-testid="button"
          type="button"
          onClick={() => handleClick("EASY")}
          className="w-full flex p-4 border-0 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-blue-600 text-zinc-100 hover:bg-blue-800 transition-all"
        >
          Easy
        </button>

        <button
          data-testid="button"
          type="button"
          onClick={() => handleClick("HARD")}
          className="w-full flex p-4 border-0 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900 hover:bg-yellow-600 transition-all"
        >
          Hard
        </button>

        <button
          data-testid="button"
          type="button"
          onClick={() => handleClick("EXPERT")}
          className="w-full flex p-4 border-0 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-red-600 text-zinc-100 hover:bg-red-800 transition-all"
        >
          Expert
        </button>
      </div>
    </div>
  );
}
