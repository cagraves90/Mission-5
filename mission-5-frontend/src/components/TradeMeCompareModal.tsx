import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FakeListingTwo = [
  {
    listingImage: "./images/TradeMe_PaddleChair.png",
    listingArea: "Auckland",
    listingCloseTime: "Closes Sun 15 Jun 2024",
    listingName: "Paddle Chair",
    listingDetails:
      "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
    buyItNowPrice: "$2950",
    startingBidPrice: "$1650",
    itemCondition: [
      <div>
        <FontAwesomeIcon icon={faCheck} /> New
      </div>,
    ],
    sellersRating: [
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
      <FontAwesomeIcon icon={faStar} />,
    ],
    itemShipping: [
      <div>
        <FontAwesomeIcon icon={faCheck} /> Parcel Collect
      </div>,
    ],
    itemPaymentOption: [
      <div>
        <FontAwesomeIcon icon={faCheck} /> NZ Bank Deposit
      </div>,
    ],
  },
  //   {
  //     listingImage: "./images/TradeMe_PaddleChair.png",
  //     listingArea: "Auckland",
  //     listingCloseTime: "Closes Sun 15 Jun 2024",
  //     listingName: "Paddle Chair",
  //     listingDetails:
  //       "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
  //     buyItNowPrice: "$2950",
  //     startingBidPrice: "$1650",
  //     itemCondition: "New",
  //     sellersRating: "100%",
  //     itemShipping: "Parcel Collect",
  //     itemPaymentOption: "NZ Bank Deposit",
  //   },
];

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
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        {/* --------------------------------- Carousel Portion of the Modal ------------------------------------- */}
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {/* This will need a map eventually ------------------------------------------------------ */}
                        </Dialog.Title>
                        {FakeListingTwo.map((item) => (
                          <div className="mt-2">
                            <img src={item.listingImage} alt="" />
                            <div className="text-xl flex flex-col">
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Closing Time
                              </p>
                              {item.listingCloseTime}
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                No reserve
                              </p>
                              {item.startingBidPrice}
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Buy Now
                              </p>
                              {item.buyItNowPrice}
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Location
                              </p>
                              {item.listingArea}
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Seller's Rating
                              </p>
                              <div className="flex">{item.sellersRating}</div>
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Condition
                              </p>
                              <div className="flex">{item.itemCondition}</div>
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Shipping
                              </p>
                              {item.itemShipping}
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Payment
                              </p>
                              {item.itemPaymentOption}
                              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                                Description
                              </p>
                              {item.listingDetails}
                            </div>
                          </div>
                        ))}

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
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
