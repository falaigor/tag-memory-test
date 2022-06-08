export function ResultItem() {
  return (
    <li
      data-testid="ranking-item"
      className="flex sm:flex-row items-center justify-between p-4 odd:bg-white even:bg-slate-100"
    >
      <div className="w-auto flex items-center">
        <div
          data-testid="position"
          className="max-w-[50px] px-4 h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          1
        </div>
        <img
          data-testid="avatar"
          className="w-[60px] md:w-[100px] mx-4 rounded-full border-2 md:border-4 border-zinc-900"
          src="https://avatars.githubusercontent.com/u/40046196?v=4"
        />

        <p data-testid="name" className="text-xl sm:text-2xl font-montserrat">
          Igor Santos
        </p>
      </div>

      <div className="w-auto flex flex-col sm:flex-row items-center justify-center">
        <p
          data-testid="guessed-tags"
          className="text-lg sm:text-xl text-center sm:text-right mx-0 sm:mx-4 font-montserrat"
        >
          30 tags
        </p>

        <div
          data-testid="seconds"
          className="max-w-[150px] sm:min-w-[100px] h-[50px] px-4 flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg sm:text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
        >
          40 s
        </div>
      </div>
    </li>
  );
}
