import { useState, useEffect } from "react";
import axios from "axios";

const TradeMeListingItemContainer = () => {
  const fakeListing = [
    {
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
      listingArea: "Auckland",
      listingCloseTime: "Closes Sun 15 Jun 2024",
      listingName: "Paddle Chair",
      listingDetails:
        "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
      buyItNowPrice: "$2950",
      startingBidPrice: "$1650",
    },
    {
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

  const [selectedCompareIcon, setSelectedCompareIcon] = useState<any>(null);
  const [selectedMagnetIcon, setSelectedMagnetIcon] = useState<any>(null);

  const handleCompareClick = () => {
    setSelectedCompareIcon(!selectedCompareIcon);
  };

  const handleMagnetClick = () => {
    setSelectedMagnetIcon(!selectedMagnetIcon);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/trademe-listing").then((response) => {
      console.log(response?.data);
      setListing(response?.data?.data);
    });
  }, []);

  return (
    <div className="bg-[#f5f3f3] ml-10 mt-10 static">
      <div className="text-4xl pb-6">WatchList / 6 Listing(s)</div>
      <div className="flex">
        <div className="flex flex-col mt-96">
          {selectedCompareIcon ? (
            <div className="w-72 h-72"></div>
          ) : (
            <div>
              <p className="text-lg">
                You have {fakeListing.length} item/s selected to compare!
              </p>
              <img
                src="./images/TradeMeKiwiCompare.png"
                alt=""
                className="w-40 h-40"
              />
            </div>
          )}
        </div>
        <div className="pl-30 grid grid-cols-2">
          {fakeListing.map((item: any, index: any) => (
            <div className="mx-20 my-20 h-1/2 w-96 bg-white">
              <button onClick={handleCompareClick}>
                {selectedCompareIcon ? (
                  <img
                    src="./images/TradeMe_BlueCompare.png"
                    alt=""
                    className="z-10 w-20 h-20 absolute"
                  />
                ) : (
                  <img
                    src="./images/TradeMe_BlueCheck.png"
                    alt=""
                    className="z-10 w-20 h-20 absolute"
                  />
                )}
              </button>
              <div className="top-0 right-0 flex justify-end">
                <button
                  onClick={handleMagnetClick}
                  className="className=  top-0 right-0 flex justify-end"
                >
                  {selectedMagnetIcon ? (
                    <img
                      src="./images/TradeMe_Check.png"
                      alt=""
                      className="z-10 w-20 h-20 absolute"
                    />
                  ) : (
                    <img
                      src="./images/TradeMe_Magnet.png"
                      alt=""
                      className="z-10 w-20 h-20 absolute"
                    />
                  )}
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src="./images/TradeMe_PaddleChair.png"
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
                      <p className="text-2xl">{item.startingBidPrice}</p>
                      <p className="text-sm">No Reserve</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-end pr-1">
                      <p className="text-2xl">{item.buyItNowPrice}</p>
                      <p className="text-sm">Buy Now</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          {/* <div className="grid-cols-2 h-1/2 w-96 bg-white">
            <button onClick={handleCompareClick}>
              {selectedCompareIcon ? (
                <img
                  src="./images/TradeMe_BlueCompare.png"
                  alt=""
                  className="z-10 w-20 h-20 absolute"
                />
              ) : (
                <img
                  src="./images/TradeMe_BlueCheck.png"
                  alt=""
                  className="z-10 w-20 h-20 absolute"
                />
              )}
            </button>
            <div className="top-0 right-0 flex justify-end">
              <button
                onClick={handleMagnetClick}
                className="className=  top-0 right-0 flex justify-end"
              >
                {selectedMagnetIcon ? (
                  <img
                    src="./images/TradeMe_Check.png"
                    alt=""
                    className="z-10 w-20 h-20 absolute"
                  />
                ) : (
                  <img
                    src="./images/TradeMe_Magnet.png"
                    alt=""
                    className="z-10 w-20 h-20 absolute"
                  />
                )}
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="./images/TradeMe_PaddleChair.png"
                alt="Trademe Listing"
                className="w-80 h-80"
              />
            </div>
            <ul>
              <li>
                <div className="flex text-sm">
                  <p className="w-1/2 pl-1 pb-3">Auckland</p>
                  <div className="w-1/2 flex justify-end pr-1">
                    <p>Closes Sun 15 Jun 2024</p>
                  </div>
                </div>
                <h2 className="text-lg pb-2">Paddle Chair</h2>

                <p className="pb-7">
                  Designed by the talented Danish designer Hans. J. Wegner, This
                  is a handmade classic of comfort and craft. Gracefully
                  sculpted. A one-piece base construction for strength. Woven
                  skillfully back and front of durable paper yarn, the Paddle
                  Chair is remarkably comfortable. An investment that will gain
                  value over time.
                </p>
                <div className="flex">
                  <div className="w-1/2 pl-1">
                    <p className="text-2xl">$1650</p>
                    <p className="text-sm">No Reserve</p>
                  </div>
                  <div className="w-1/2 flex flex-col items-end pr-1">
                    <p className="text-2xl">$2950</p>
                    <p className="text-sm">Buy Now</p>
                  </div>
                </div>
              </li> */}
          {/* {listing?.map((item: any, index: any) => ( */}
          {/* <li key={index}>
                            <p>{item.listingArea}Auckland</p>
                            <p>{item.listingCloseTime}Closes Sun 15 Jun 2024</p>
                            <h2>{item.listingName}Paddle Chair</h2>
                            <p>{item.buyItNowPrice}$2950</p>
                            <p>{item.startingBidPrice}$1650</p>
                            <p>
                                {item.listingDetails}Designed by the talented Danish designer
                                Hans. J. Wegner, This is a handmade classic of comfort and
                                craft. Gracefully sculpted. A one-piece base construction for
                                strength. Woven skillfully back and front of durable paper yarn,
                                the Paddle Chair is remarkably comfortable. An investment that
                                will gain value over time.
                            </p> */}
          {/* <p>{item.listingDescription}</p> */}
          {/* <p>{item.shippingOptions}</p> */}
          {/* <p>{item.paymentOptions}</p> */}
          {/* </li> */}
          {/* ))} */}
          {/* </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default TradeMeListingItemContainer;
