import { RankingListItem } from "./ListItem";

export function RankingList() {
  return (
    <div data-testid="ranking-list">
      <div className="flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
        <p className="text-2xl font-montserrat">Top 5</p>
      </div>

      <div className="flex flex-col justify-between border-t-0 border-b-2 border-x-2 border-zinc-900 odd:bg-white even:bg-slate-100">
        <RankingListItem />
        <RankingListItem />
      </div>
    </div>
  );
}
