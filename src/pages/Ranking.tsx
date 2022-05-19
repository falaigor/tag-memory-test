import { RankingList } from "../components/Ranking/List";

export const Ranking = () => {
  return (
    <div
      data-testid="ranking-page"
      className="w-screen flex items-center justify-center mobile:p-4"
    >
      <div className="max-w-3xl w-full flex flex-col">
        <div>
          <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
            HTML Tag memory test
          </h1>
        </div>

        <div className="flex p-4 my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
          <p className="text-3xl font-montserrat">
            Your position in the ranking
          </p>

          <div
            data-testid="positon-number"
            className="flex flex-row font-montserrat text-7xl"
          >
            300
          </div>
        </div>

        <RankingList />
      </div>
    </div>
  );
};
