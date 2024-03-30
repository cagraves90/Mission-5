import { useState, useEffect } from "react";
import axios from "axios";
// import TradeMeCompareModal from "./TradeMeCompareModal";
// import TradeMeCompareCarousel from "./TradeMeCompareCarousel";

// // -------------------------------------- HeadlessUI Modal ----------------------------------------
// import { Dialog, Transition } from "@headlessui/react";

const TradeMeListingItemContainer = () => {
  const fakeListing = [
    {
      listingImage: "./images/TradeMe_PaddleChair.png",
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingImage: "./images/TradeMe_PaddleChair.png",
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingImage: "./images/TradeMe_PaddleChair.png",
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingImage: "./images/TradeMe_PaddleChair.png",
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingImage: "./images/TradeMe_PaddleChair.png",
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingImage: "./images/TradeMe_PaddleChair.png",
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
  ];

  const [listing, setListing] = useState<any>(null);

  const [selectedCompareButtons, setSelectedCompareButtons] = useState<
    number[]
  >([]);

  const [selectedMagnetButtons, setSelectedMagnetButtons] = useState<number[]>(
    []
  );

  const handleCompareClick = (index: number) => {
    setSelectedCompareButtons((prevState) => {
      // If the index is already in the array, remove it
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      }
      // Otherwise, add it
      else {
        return [...prevState, index];
      }
    });
  };

  const handleMagnetClick = (index: number) => {
    setSelectedMagnetButtons((prevState) => {
      // If the index is already in the array, remove it
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      }
      // Otherwise, add it
      else {
        return [...prevState, index];
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/trademe-listing").then((response) => {
      console.log(response?.data);
      setListing(response?.data?.data);
    });
  }, []);

  // let [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <div className="bg-[#f5f3f3] ml-10 mt-10 static">
      <div className="text-4xl pb-6">WatchList / 6 Listing(s)</div>
      <div className="flex">
        <div className="flex flex-col mt-96">
          {selectedCompareButtons.length > 0 ? (
            <div>
              <p className="text-lg">
                You have {selectedCompareButtons.length} item/s selected to
                compare!
              </p>
              <img
                src="./images/TradeMeKiwiCompare.png"
                alt=""
                className="w-40 h-40"
              />
            </div>
          ) : (
            <div className="w-72 h-72"></div>
          )}
        </div>
        <div className="pl-30 grid grid-cols-2 ">
          {listing?.map((item: any, index: any) => (
            <div className="mx-20 my-5 w-96 bg-white hover:cursor-pointer">
              <button onClick={() => handleCompareClick(index)}>
                {selectedCompareButtons.includes(index) ? (
                  <img
                    src="./images/TradeMe_BlueCheck.png"
                    alt=""
                    className="z-10 w-20 h-20 absolute"
                  />
                ) : (
                  <img
                    src="./images/TradeMe_BlueCompare.png"
                    alt=""
                    className="z-10 w-20 h-20 absolute"
                  />
                )}
              </button>
              <div className="top-0 right-0 flex justify-end">
                <button
                  onClick={() => handleMagnetClick(index)}
                  className="className=  top-0 right-0 flex justify-end"
                >
                  {selectedMagnetButtons.includes(index) ? (
                    <img
                      src="./images/TradeMe_Magnet.png"
                      alt=""
                      className="z-10 w-20 h-20 absolute"
                    />
                  ) : (
                    <img
                      src="./images/TradeMe_Check.png"
                      alt=""
                      className="z-10 w-20 h-20 absolute"
                    />
                  )}
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={item.listingImage}
                  alt="Trademe Listing"
                  className="w-80 h-80"
                />
              </div>
              <ul>
                <li>
                  <div className="flex text-sm">
                    <p className="w-1/2 pl-1 pb-3">{item.listingArea}</p>
                    <div className="w-1/2 flex justify-end pr-1">
                      <p>{item.listingCloseTime}</p>
                    </div>
                  </div>
                  <h2 className="text-lg pb-2">{item.listingName}</h2>

                  <p className="pb-7">{item.listingDetails}</p>
                  <div className="flex">
                    <div className="w-1/2 pl-1">
                      <p className="text-2xl">${item.startingBidPrice}</p>
                      <p className="text-sm">No Reserve</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-end pr-1">
                      <p className="text-2xl">${item.buyItNowPrice}</p>
                      <p className="text-sm">Buy Now</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TradeMeListingItemContainer;
