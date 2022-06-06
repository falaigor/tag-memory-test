import { useEffect, useState } from "react";
import { RankingListItem } from "./ListItem";
import { api } from "../../services/api";
import { UserType } from "../../utils/types";
import { Link } from "react-router-dom";
import { AppRoute } from "../../routes/routes";
import { Ranking } from "../../pages/Ranking";
import { Loading } from "../Loading";

interface RankingProps {
  id: string;
  guessedTags: number;
  time: number;
  user: UserType;
}

export function RankingList() {
  const [rankingList, setRankingList] = useState<RankingProps[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get<RankingProps[]>("ranking")
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
  }, []);

  if (loading) {
    return <Loading message="Processing..." />;
  }

  return (
    <>
      {error ? (
        <h1 className="mt-10 text-red-500">
          There was an error loading the list,{" "}
          <Link to={AppRoute.Ranking} reloadDocument className="underline">
            please try again
          </Link>
        </h1>
      ) : (
        <div data-testid="ranking-list">
          <div className="flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
            <p className="text-2xl font-montserrat">Top 5</p>
          </div>

          <div className="flex flex-col justify-between border-t-0 border-b-2 border-x-2 border-zinc-900 odd:bg-white even:bg-slate-100">
            {rankingList.map((i, index) => (
              <RankingListItem
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
    </>
  );
}
