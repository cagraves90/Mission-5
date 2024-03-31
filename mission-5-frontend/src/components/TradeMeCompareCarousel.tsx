import { useState, useEffect } from "react";
import axios from "axios";

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
  const [listing, setListing] = useState<any>(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/trademe-listing").then((response) => {
      console.log(response?.data);
      setListing(response?.data?.data);
    });
  }, []);
  return (
    <div>
      {/* --------------------------------- Carousel Portion of the Modal ------------------------------------- */}
      <div className="flex">
        {listing?.map((item: any) => (
          <div className="mt-2 mx-2">
            <img src={item.listingImage} alt="" className="w-52 h-52" />
            <div className="text-xl flex flex-col w-48">
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Closing Time
              </p>
              {item.listingCloseTime}
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                No reserve
              </p>
              ${item.startingBidPrice}
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Buy Now
              </p>
              ${item.buyItNowPrice}
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Location
              </p>
              {item.listingArea}
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Seller's Rating
              </p>
              <div className="flex">
                <div className="text-3xl">{item.sellersRating}</div>
              </div>
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Condition
              </p>
              <div className="flex">{item.itemCondition}</div>
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Shipping
              </p>
              <div className="h-28 flex flex-col">
                <div>{item.itemShipping}</div>
                <div>{item.itemShippingTwo}</div>
                <div>{item.itemShippingThree}</div>
              </div>
              <p className="flex justify-center bg-[#ffb00b] rounded-md my-1">
                Payment
              </p>
              <div className="h-14 flex flex-col">
                <div>{item.itemPaymentOptions}</div>
                <div>{item.itemPaymentOptionsTwo}</div>
              </div>
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
