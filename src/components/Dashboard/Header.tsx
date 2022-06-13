import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { CaretDown, SignOut } from "phosphor-react";
import { useAuth } from "../../contexts/auth";

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function logout() {
    signOut();
    navigate("/", { replace: true });
  }

  return (
    <div data-testid="header" className="w-full flex justify-between">
      <h1 className="pt-4 pb-2 text-3xl sm:text-5xl font-extrabold font-montserrat text-zinc-900">
        Dashboard
      </h1>

      <div className="flex items-center">
        <img
          data-testid="avatar"
          className="w-[60px] mx-4 rounded-full border-2 md:border-4 border-zinc-900"
          src={user.avatar_url}
        />

        <Menu as="div" className="relative inline-block text-left z-50">
          <div>
            <Menu.Button
              data-testid="menu-button"
              className="max-w-[30px] px-1 h-[30px] flex border-2 border-zinc-900 drop-shadow-stroke rounded-lg text-lg font-bold justify-center items-center bg-yellow-500 text-zinc-900"
            >
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
                  <button
                    type="button"
                    onClick={() => logout()}
                    data-testid="logout-button"
                    className="hover:bg-red-500 text-zinc-900 group flex w-full items-center font-montserrat rounded-md px-2 py-2 text-sm"
                  >
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
  );
}
