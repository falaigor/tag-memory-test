import avatarUrl from "../images/avatar.png";

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
          <p className="text-3xl font-montserrat">Your position</p>

          <div
            data-testid="positon-number"
            className="flex flex-row font-montserrat text-7xl"
          >
            300
          </div>
        </div>

        <div data-testid="list-ranking">
          <div className="flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
            <p className="text-2xl font-montserrat">Top 5</p>
          </div>

          <div className="flex flex-col justify-between border-t-0 border-b-2 border-x-2 border-zinc-900 odd:bg-white even:bg-slate-100">
            <li
              data-testid="ranking-item"
              className="flex items-center justify-between p-4 odd:bg-white even:bg-slate-100"
            >
              <div className="flex items-center">
                <div className="max-w-[50px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  1
                </div>
                <div className="flex items-center">
                  <img className="w-[100px] mx-4" src={avatarUrl} />
                  <p className="text-2xl font-montserrat">Igor Santos</p>
                </div>
              </div>

              <div className="flex">
                <p className="text-xl text-right mx-4 font-montserrat">
                  79 tags guesseds
                </p>

                <div className="max-w-[150px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  432 seconds
                </div>
              </div>
            </li>

            <li
              data-testid="ranking-item"
              className="flex items-center justify-between p-4 odd:bg-white even:bg-slate-100"
            >
              <div className="flex items-center">
                <div className="max-w-[50px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  1
                </div>
                <div className="flex items-center">
                  <img className="w-[100px] mx-4" src={avatarUrl} />
                  <p className="text-2xl font-montserrat">Igor Santos</p>
                </div>
              </div>

              <div className="flex">
                <p className="text-xl text-right mx-4 font-montserrat">
                  79 tags guesseds
                </p>

                <div className="max-w-[150px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  432 seconds
                </div>
              </div>
            </li>

            <li
              data-testid="ranking-item"
              className="flex items-center justify-between p-4 odd:bg-white even:bg-slate-100"
            >
              <div className="flex items-center">
                <div className="max-w-[50px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  1
                </div>
                <div className="flex items-center">
                  <img className="w-[100px] mx-4" src={avatarUrl} />
                  <p className="text-2xl font-montserrat">Igor Santos</p>
                </div>
              </div>

              <div className="flex">
                <p className="text-xl text-right mx-4 font-montserrat">
                  79 tags guesseds
                </p>

                <div className="max-w-[150px] w-full h-[50px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  432 seconds
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
