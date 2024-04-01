import { useState } from "react";
import React from "react";

import TradeMeListingItemContainer from "./TradeMeListingItemContainer";
import TradeMeListingSideBarMain from "./TradeMeListingSideBarMain";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";

const TrademeListingMain: React.FC = () => {
  return (
    <>
      <TopNavBar />
      <div className="flex bg-[#f5f3f3] ">
        <div className="w-80">
          <TradeMeListingSideBarMain />
        </div>
        <div>
          <TradeMeListingItemContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TrademeListingMain;
