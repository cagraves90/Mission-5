import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TradeMeCompareModal from "./TradeMeCompareModal";

const TradeMeListingItemContainer: React.FC = () => {
  const [listing, setListing] = useState<any[]>([]);

  const [selectedCompareButtons, setSelectedCompareButtons] = useState<any[]>(
    []
  );

  const [selectedMagnetButtons, setSelectedMagnetButtons] = useState<number[]>(
    []
  );

  const filteredListing = listing.filter((item: any, index: number) =>
    selectedCompareButtons.includes(index)
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

  return (
    <>
      <div className="bg-[#f5f3f3] ml-10 mt-10 relative">
        <div className="text-4xl pb-6">WatchList / 6 Listing(s)</div>
        <div className="flex">
          <div className="flex flex-col mt-20 fixed top-100">
            {selectedCompareButtons.length > 0 ? (
              <div>
                <div className="text-lg text-white hover:cursor-pointer">
                  {/* -------------------------- MODAL PORTION OF BUTTON ------------------------------ */}
                  <button
                    type="button"
                    className="bg-[#555555] rounded-2xl w-32"
                  >
                    <TradeMeCompareModal data={filteredListing} />
                  </button>
                  <div className="w-0 h-0 mb-1 ml-10 border-l-[8px] border-l-transparent border-t-[15px] border-t-[#555555] border-r-[8px] border-r-transparent "></div>
                  <p className="bg-[#555555] rounded-2xl py-2 px-2 w-52">
                    Compare your {selectedCompareButtons.length} Listings
                  </p>
                  <div className="w-0 h-0 ml-16 border-l-[8px] border-l-transparent border-t-[15px] border-t-[#555555] border-r-[8px] border-r-transparent "></div>
                </div>
                <img
                  src="./images/TradeMeKiwiCompare.png"
                  alt=""
                  className="w-40 h-40"
                />
              </div>
            ) : (
              <div className="w-52 h-40"></div>
            )}
          </div>
          <div className="w-5/6 ml-48 grid grid-cols-2 2xl:grid-cols-4">
            {listing?.map((item: any, index: any) => (
              <div className="mx-20 my-5 w-96 bg-white hover:cursor-pointer">
                <div className="mt-0 bg-[#f5f3f3]">
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
                </div>
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
                    <div className="h-48">
                      <p className="pb-7">{item.listingDetails}</p>
                    </div>
                    <div className="flex">
                      <div className="w-1/2 pl-1">
                        <p className="text-2xl">${item.startingBidPrice}</p>
                        <p className="text-sm">No Reserve</p>
                      </div>
                      <div className="w-1/2 flex flex-col items-end pr-1">
                        <p className="text-2xl">${item.buyItNowPrice}</p>
                        <p className="text-sm">Buy Now</p>
                      </div>
                      <div className="hidden">
                        {item.sellersRating}
                        {item.itemCondition}
                        {item.itemShipping}
                        {item.itemShippingTwo}
                        {item.itemShippingThree}
                        {item.itemPaymentOptions}
                        {item.itemPaymentOptionsTwo}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TradeMeListingItemContainer;
