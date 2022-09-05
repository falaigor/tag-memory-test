import {
  forwardRef,
  Fragment,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";
import { Transition, Dialog } from "@headlessui/react";
import { CaretRight, X } from "phosphor-react";
import { Link } from "react-router-dom";

import { AppRoute } from "../../routes/routes";
import { api } from "../../services/api";
import { useChallenge } from "../../contexts/challenge";
import { useI18n } from "react-simple-i18n";

export const Modal = forwardRef((props, ref) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("@tagMemoryTest:token");
  const { totalTime, finishChallenge, totalGuessed } = useChallenge();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useImperativeHandle(
    ref,
    () => ({
      onOpen,
      onClose,
      isOpen,
    }),
    [isOpen]
  );

  useEffect(() => {
    if (finishChallenge && !!token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.post("/ranking", {
        guessedTags: totalGuessed,
        time: totalTime,
      });
    }
  }, [finishChallenge]);

  return (
    <Transition data-testid="modal" appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <div className="">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden border-2 border-zinc-900 drop-shadow-stroke rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-4xl py-4 font-medium leading-6 text-gray-900 font-montserrat"
                  >
                    <button
                      type="button"
                      onClick={() => onClose}
                      data-testid="button-close-modal"
                      className="w-full flex justify-end mb-4 outline-none "
                    >
                      <X size={20} className="hover:text-zinc-900" />
                    </button>
                    {t("modal.title")}
                  </Dialog.Title>
                  <div data-testid="result" className="mt-4 mb-6">
                    <p className=" text-gray-500">
                      {t("modal.result")}
                      <span className="text-blue-800 font-bold">
                        {totalGuessed > 1
                          ? ` ${totalGuessed} tags `
                          : ` ${totalGuessed} tag `}
                      </span>
                      {t("modal.result_in")}
                      <span className="text-blue-800 font-bold">
                        {t("modal.result_seconds", totalTime.toString())}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      data-testid="button-restart"
                      className="w-full my-4 flex p-4 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-blue-600 text-zinc-100 hover:bg-blue-800 transition-all"
                      to={AppRoute.Home}
                      reloadDocument
                    >
                      {t("modal.button")}
                      <CaretRight weight="bold" />
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});
