export function RankingListItem({ user, time, position, guessedTags }) {
  return (
    <li
      data-testid="ranking-item"
      className="flex flex-col sm:flex-row items-center justify-between p-4 odd:bg-white even:bg-slate-100"
    >
      <div className="flex items-center ">
        <div
          data-testid="position"
          className="max-w-[50px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          {position}
        </div>
        <div className="flex items-center">
          <img
            data-testid="avatar"
            className="w-[60px] md:w-[100px] mx-4 rounded-full border-2 md:border-4 border-zinc-900"
            src={user.avatar_url}
          />

          <p data-testid="name" className="text-2xl font-montserrat">
            {user.name}
          </p>
        </div>
      </div>

      <div className="flex">
        <p
          data-testid="guessed-tags"
          className="text-xl text-right mx-4 font-montserrat"
        >
          {guessedTags} tags guesseds
        </p>

        <div
          data-testid="seconds"
          className="max-w-[150px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          {time} seconds
        </div>
      </div>
    </li>
  );
}
