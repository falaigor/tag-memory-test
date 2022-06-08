import { Header } from "../../components/Dashboard/Header";
import { ResultItem } from "../../components/Dashboard/ResultItem";
import { ViewPage } from "../../components/ViewPage/ViewPage";

export function HomeDashboard() {
  return (
    <ViewPage>
      <div
        data-testid="dashboad-page"
        className="max-w-3xl m-auto flex flex-col items-center justify-center mobile:p-4"
      >
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between w-full mt-4">
          <div className="w-full flex p-4 my-2 sm:my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
            <p className="text-2xl font-montserrat">Tag average</p>
            <p className="text-4xl font-montserrat">30</p>
          </div>

          <div className="w-full flex p-4 my-2 sm:my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
            <p className="text-2xl font-montserrat">Time average</p>
            <p className="text-4xl font-montserrat">30s</p>
          </div>
        </div>

        <div data-testid="ranking-list" className="w-full">
          <div className="w-full flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
            <p className="text-2xl font-montserrat">Your results</p>
          </div>

          <div className="flex flex-col justify-between border-t-0 border-b-2 border-x-2 border-zinc-900 odd:bg-white even:bg-slate-100">
            <ResultItem />
          </div>
        </div>
      </div>
    </ViewPage>
  );
}
