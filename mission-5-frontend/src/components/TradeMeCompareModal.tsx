import { Fragment, useState } from "react";
import TradeMeCompareCarousel from "./TradeMeCompareCarousel";

// -------------------------------------- HeadlessUI Modal ----------------------------------------
import { Dialog, Transition } from "@headlessui/react";

// -------------------------------------- Font Awesome ----------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// -------------------------------------- HeadlessUI Modal ----------------------------------------

const TradeMeCompareModal = () => {
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
        <div className="flex p-4">
          <div className="text-[#3b82f6] px-2 hover:cursor-pointer">
            <div className=" flex items-center justify-center">
              {/* ---------------------------------- MODAL PORTION ------------------------------------ */}
              <button type="button" onClick={openModal}>
                <FontAwesomeIcon icon={faScaleUnbalanced} className="pr-2" />
                Compare Listings
              </button>
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
                      <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="mt-2 flex justify-end">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 p-4 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                        {/* ------------------------ Carousel ----------------------------- */}
                        <TradeMeCompareCarousel />
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
