export function ResultItem({ user, position, time, guessedTags }) {
  return (
    <li
      data-testid="result-item"
      className="flex sm:flex-row items-center justify-between p-4 odd:bg-white even:bg-slate-100"
    >
      <div className="w-auto flex items-center">
        <div
          data-testid="position"
          className="max-w-[50px] px-4 h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          {position}
        </div>

        <p
          data-testid="name"
          className="text-xl sm:text-2xl mx-4 font-montserrat"
        >
          {user.name}
        </p>
      </div>

      <div className="w-auto flex flex-col sm:flex-row items-center justify-center">
        <p
          data-testid="guessed-tags"
          className="text-lg sm:text-xl text-center sm:text-right mx-0 sm:mx-4 font-montserrat"
        >
          {guessedTags} tags
        </p>

        <div
          data-testid="time"
          className="max-w-[150px] sm:min-w-[100px] h-[50px] px-4 flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg sm:text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          {time}s
        </div>
      </div>
    </li>
  );
}
