import avatarUrl from "../../images/avatar.png";

export function RankingListItem() {
  return (
    <li
      data-testid="ranking-item"
      className="flex items-center justify-between p-4 odd:bg-white even:bg-slate-100"
    >
      <div className="flex items-center">
        <div
          data-testid="position"
          className="max-w-[50px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          1
        </div>
        <div className="flex items-center">
          <img
            data-testid="avatar"
            className="w-[100px] mx-4"
            src={avatarUrl}
          />
          <p data-testid="name" className="text-2xl font-montserrat">
            Igor Santos
          </p>
        </div>
      </div>

      <div className="flex">
        <p
          data-testid="guessed-tags"
          className="text-xl text-right mx-4 font-montserrat"
        >
          79 tags guesseds
        </p>

        <div
          data-testid="seconds"
          className="max-w-[150px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          432 seconds
        </div>
      </div>
    </li>
  );
}
