import React from "react";
import { Fragment, useState } from "react";
import TradeMeCompareCarousel from "./TradeMeCompareCarousel";

// -------------------------------------- HeadlessUI Modal ----------------------------------------
import { Dialog, Transition } from "@headlessui/react";

// -------------------------------------- HeadlessUI Modal ----------------------------------------
interface TradeMeCompareModalProps {
  data: any;
}

const TradeMeCompareModal: React.FC<TradeMeCompareModalProps> = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div>
        <div className="flex p-2">
          <div className="text-white pl-2 text-lg">
            <div className="">
              <button
                type="button"
                onClick={openModal}
                className="flex w-28 hover:cursor-pointer"
              >
                Click here to
              </button>
            </div>
            {/* ---------------------------------- MODAL PORTION ------------------------------------ */}
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
                      <Dialog.Panel className="w-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        {/* ------------------------ Carousel ----------------------------- */}
                        <TradeMeCompareCarousel data={data} />
                        {/* ------------------------ Carousel ----------------------------- */}
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TradeMeCompareModal;
