import React from "react";

interface TradeMeCompareCarouselProps {
  data: any;
}

const TradeMeCompareCarousel: React.FC<TradeMeCompareCarouselProps> = ({
  data,
}) => {
  return (
    <div>
      {/* --------------------------------- Carousel Portion of the Modal ------------------------------------- */}
      <div className="flex justify-center">
        {/* -------------------------------- filtered listing--------------------------------- */}

        {data?.map((item: any, index: any) => (
          <div className="mt-2 mx-2" key={index}>
            <img src={item.listingImage} alt="" className="h-52 w-52 " />
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
