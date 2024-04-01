import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import TradeMeNewCompareFunctionInfo from "./TradeMeNewCompareFunctionInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TradeMeNewCompareFunctionModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex flex-col items-center rounded-md bg-[#ffb00b] px-4 py-2 text-sm font-medium text-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          New Function!
        </button>
        <div
          className="w-0 h-0 
  border-l-[10px] border-l-transparent
  border-t-[15px] border-t-[#ffb00b]
  border-r-[10px] border-r-transparent
 "
        ></div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                  <div className="mt-2">
                    <TradeMeNewCompareFunctionInfo />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default TradeMeNewCompareFunctionModal;
