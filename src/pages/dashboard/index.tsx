import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CaretDown, PencilSimple, SignOut } from "phosphor-react";
import { ViewPage } from "../../components/ViewPage/ViewPage";

export function HomeDashboard() {
  return (
    <ViewPage>
      <div
        data-testid="dashboad-page"
        className="max-w-3xl m-auto flex flex-col items-center justify-center mobile:p-4"
      >
        <div className="w-full flex justify-between">
          <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
            Dashboard
          </h1>

          <div className="flex items-center">
            <img
              data-testid="avatar"
              className="w-[60px] mx-4 rounded-full border-2 md:border-4 border-zinc-900"
              src="https://avatars.githubusercontent.com/u/40046196?v=4"
            />

            <Menu as="div" className="relative inline-block text-left z-50">
              <div>
                <Menu.Button className="max-w-[30px] px-1 h-[30px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-lg text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900">
                  <CaretDown size={32} weight="bold" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md border-2 border-zinc-900 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <button className="hover:bg-yellow-500 text-zinc-900 group flex w-full items-center font-montserrat rounded-md px-2 py-2 text-sm">
                        <PencilSimple
                          className="mr-2 h-5 w-5"
                          weight="bold"
                          aria-hidden="true"
                        />
                        Edit
                      </button>
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <button className="hover:bg-red-500 text-zinc-900 group flex w-full items-center font-montserrat rounded-md px-2 py-2 text-sm">
                        <SignOut
                          className="mr-2 h-5 w-5"
                          weight="bold"
                          aria-hidden="true"
                        />
                        Logout
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 justify-between w-full mt-4">
          <div className="w-full flex p-4 my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
            <p className="text-3xl font-montserrat">Tag average</p>
            <p className="text-4xl font-montserrat">30</p>
          </div>

          <div className="w-full flex p-4 my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
            <p className="text-3xl font-montserrat">Time average</p>
            <p className="text-4xl font-montserrat">30</p>
          </div>
        </div>

        <div data-testid="ranking-list" className="w-full">
          <div className="w-full flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
            <p className="text-2xl font-montserrat">Your results</p>
          </div>

          <div className="flex flex-col justify-between border-t-0 border-b-2 border-x-2 border-zinc-900 odd:bg-white even:bg-slate-100">
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

                <p
                  data-testid="name"
                  className="text-xl sm:text-2xl font-montserrat"
                >
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
          </div>
        </div>
      </div>
    </ViewPage>
  );
}
