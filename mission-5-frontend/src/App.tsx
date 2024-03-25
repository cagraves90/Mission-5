import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [listing, setListing] = useState<any>(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/trademe-listing").then((response) => {
      console.log(response?.data);
      setListing(response?.data?.data);
    });
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
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
    </>
  );
}

export default App;
