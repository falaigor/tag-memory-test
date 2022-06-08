import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alerts } from "../../components/Alerts";
import { Header } from "../../components/Dashboard/Header";
import { ResultItem } from "../../components/Dashboard/ResultItem";
import { Loading } from "../../components/Ranking/Loading";
import { ViewPage } from "../../components/ViewPage/ViewPage";
import { AppRoute } from "../../routes/routes";
import { api } from "../../services/api";
import { RankingProps } from "../../utils/types";

export function HomeDashboard() {
  const [rankingList, setRankingList] = useState<RankingProps[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const tagAverage = rankingList.reduce((acc, { guessedTags }) => {
    return Math.round((acc += guessedTags / rankingList.length));
  }, 0);

  const timeAverage = rankingList.reduce((acc, { time }) => {
    return Math.round((acc += time / rankingList.length));
  }, 0);

  useEffect(() => {
    const token = localStorage.getItem("@tagMemoryTest:token");

    async function fetchRanking() {
      if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        await api
          .get<RankingProps[]>("user-ranking")
          .then((response) => {
            setRankingList(response.data);
          })
          .catch((err) => {
            setError(true);
            throw new Error(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }

    fetchRanking();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
            <p className="text-4xl font-montserrat">{tagAverage}</p>
          </div>

          <div className="w-full flex p-4 my-2 sm:my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
            <p className="text-2xl font-montserrat">Time average</p>
            <p className="text-4xl font-montserrat">{`${timeAverage}s`}</p>
          </div>
        </div>

        {error ? (
          <Alerts alertTitle="Error" type="error">
            <p className="p-1">
              There was an error loading the list,{" "}
              <Link
                to={AppRoute.Dashboard}
                reloadDocument
                className="underline"
              >
                please try again
              </Link>
            </p>
          </Alerts>
        ) : (
          <div data-testid="ranking-list" className="w-full">
            <div className="w-full flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
              <p className="text-2xl font-montserrat">Your results</p>
            </div>

            <div className="flex flex-col justify-between border-t-0 border-b-2 border-x-2 border-zinc-900 odd:bg-white even:bg-slate-100">
              {rankingList.map((i, index) => (
                <ResultItem
                  key={i.id}
                  user={i.user}
                  time={i.time}
                  position={++index}
                  guessedTags={i.guessedTags}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </ViewPage>
  );
}
