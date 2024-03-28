// import { useState, useEffect } from "react";
import TradeMeListingSideBarMain from "./TradeMeListingSideBarMain";
import TradeMeListingItemContainer from "./TradeMeListingItemContainer";

// import axios from "axios";

const TrademeListingMain = () => {
  // const [listing, setListing] = useState<any>(null);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/api/trademe-listing").then((response) => {
  //     console.log(response?.data);
  //     setListing(response?.data?.data);
  //   });
  // }, []);

  return (
    <>
      <div className="flex bg-[#f5f3f3] ">
        <div className="w-80">
          <TradeMeListingSideBarMain />
        </div>
        <div>
          <TradeMeListingItemContainer />
        </div>
        {/* <div className="h-screen bg-[#f5f3f3] ml-10 mt-10 static">
          <div className="grid-cols-2 h-1/2 w-1/6 bg-white">
            <img
              src="./images/TradeMe_BlueCompare.png"
              alt=""
              className="z-10 w-20 h-20 absolute"
            />
            <div className="top-0 right-0 flex justify-end">
              <img
                src="./images/TradeMe_Magnet.png"
                alt="Trade Me Magnet Icon"
                className="z-10 w-20 h-20 absolute"
              />
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
              </li>
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
    </>
  );
};
export default TrademeListingMain;
