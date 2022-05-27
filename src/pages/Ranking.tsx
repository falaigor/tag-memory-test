import { RankingList } from "../components/Ranking/List";
import { ViewPage } from "../components/ViewPage/ViewPage";

export const Ranking = () => {
  return (
    <ViewPage>
      <div
        data-testid="ranking-page"
        className="flex items-center justify-center mobile:p-4"
      >
        <div className="max-w-3xl w-full flex flex-col">
          <div>
            <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
              HTML Tag memory test
            </h1>
          </div>

          <RankingList />
        </div>
      </div>
    </ViewPage>
  );
};
