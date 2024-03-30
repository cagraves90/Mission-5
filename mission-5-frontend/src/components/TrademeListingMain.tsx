// import { useState } from "react";

import TradeMeListingItemContainer from "./TradeMeListingItemContainer";
import TradeMeListingSideBarMain from "./TradeMeListingSideBarMain";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";

const TrademeListingMain = () => {
  // const [selectedCompareButtons, setSelectedCompareButtons] = useState<
  //   number[]
  // >([]);

  // const handleCompareClick = (index: number) => {
  //   setSelectedCompareButtons((prevState) => {
  //     // If the index is already in the array, remove it
  //     if (prevState.includes(index)) {
  //       return prevState.filter((i) => i !== index);
  //     }
  //     // Otherwise, add it
  //     else {
  //       return [...prevState, index];
  //     }
  //   });
  // };

  return (
    <>
      <TopNavBar />
      <div className="flex bg-[#f5f3f3] ">
        <div className="w-80">
          <TradeMeListingSideBarMain />
        </div>
        <div>
          <TradeMeListingItemContainer
          // handleCompareClick={handleCompareClick}
          // selectedCompareButtons={selectedCompareButtons}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TrademeListingMain;
