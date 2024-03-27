import { useState, useEffect } from "react";

import axios from "axios";

const TrademeListingMain = () => {
  const [listing, setListing] = useState<any>(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/trademe-listing").then((response) => {
      console.log(response?.data);
      setListing(response?.data?.data);
    });
  }, []);

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <h1 className="text-xl">Hello world!</h1>
      <ul>
        {listing?.map((item: any, index: any) => (
          <li key={index}>
            <h2>{item.listingName}</h2>
            <p>{item.buyItNowPrice}</p>
            <p>{item.startingBidPrice}</p>
            <p>{item.listingDetails}</p>
            <p>{item.listingDescription}</p>
            <p>{item.shippingOptions}</p>
            <p>{item.paymentOptions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TrademeListingMain;
