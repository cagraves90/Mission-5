// import { useState, useEffect } from "react";

// -------------------------------------- Font Awesome ----------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// -------------------------------------- Material UI Carousel ----------------------------------------

// ------------------------------------------------------------------------------------------------------

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
  {
    listingImage: "./images/TradeMe_PaddleChair.png",
    listingArea: "Auckland",
    listingCloseTime: "Closes Sun 15 Jun 2024",
    listingName: "Paddle Chair",
    listingDetails:
      "Designed by the talented Danish designer Hans. J. Wegner, This is a handmade classic of comfort and craft. Gracefully sculpted. A one-piece base construction for strength. Woven skillfully back and front of durable paper yarn, the Paddle Chair is remarkably comfortable. An investment that will gain value over time.",
    buyItNowPrice: "$2950",
    startingBidPrice: "$1650",
    itemCondition: "New",
    sellersRating: "100%",
    itemShipping: "Parcel Collect",
    itemPaymentOption: "NZ Bank Deposit",
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
    itemCondition: "New",
    sellersRating: "100%",
    itemShipping: "Parcel Collect",
    itemPaymentOption: "NZ Bank Deposit",
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
    itemCondition: "New",
    sellersRating: "100%",
    itemShipping: "Parcel Collect",
    itemPaymentOption: "NZ Bank Deposit",
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
    itemCondition: "New",
    sellersRating: "100%",
    itemShipping: "Parcel Collect",
    itemPaymentOption: "NZ Bank Deposit",
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
    itemCondition: "New",
    sellersRating: "100%",
    itemShipping: "Parcel Collect",
    itemPaymentOption: "NZ Bank Deposit",
  },
];

const TradeMeCompareCarousel = () => {
  return (
    <div>
      {/* --------------------------------- Carousel Portion of the Modal ------------------------------------- */}
      <div className="flex">
        {FakeListingTwo.map((item) => (
          <div className="mt-2 mx-2">
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
      </div>
    </div>
  );
};
export default TradeMeCompareCarousel;
