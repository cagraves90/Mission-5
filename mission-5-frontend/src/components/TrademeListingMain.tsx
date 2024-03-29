import TradeMeListingSideBarMain from "./TradeMeListingSideBarMain";
import TradeMeListingItemContainer from "./TradeMeListingItemContainer";

const TrademeListingMain = () => {
  return (
    <>
      <div className="flex bg-[#f5f3f3] ">
        <div className="w-80">
          <TradeMeListingSideBarMain />
        </div>
        <div>
          <TradeMeListingItemContainer />
        </div>
      </div>
    </>
  );
};
export default TrademeListingMain;
