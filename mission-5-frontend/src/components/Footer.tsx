import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="h-1/5 bg-[#dddddd] rounded-xl pl-8">
      <h1 className="text-3xl py-8">Help Centre</h1>
      <div className="flex pb-10">
        <div className="flex flex-col items-start w-1/5">
          <div className="text-3xl pb-2">Account</div>
          <div className="">Textholder</div>
          <div className="">Textholder</div>
        </div>
        <div className="flex flex-col items-start w-1/5">
          <div className="text-3xl pb-2">Buying & Bidding</div>
          <div className="text-xl">How to place a Bid</div>
          <div className="text-xl">Bidding Policies</div>
        </div>
        <div className="flex flex-col items-start w-1/5">
          <div className="text-3xl pb-2">Selling & Fees</div>
          <div className="text-xl">Textholder</div>
          <div className="text-xl">Textholder</div>
          <div className="text-xl">Textholder</div>
        </div>
        <div className="flex flex-col items-start w-1/5">
          <div className="text-3xl pb-2">Payments & Money</div>
          <div className="text-xl">Textholder</div>
          <div className="text-xl">Textholder</div>
        </div>
        <div className="flex flex-col items-start w-1/5">
          <div className="text-3xl pb-2">Policies, Terms & Conditions</div>
          <div className="text-xl">Textholder</div>
        </div>
      </div>

      <div className="flex text-xl pb-6 ">
        <div className="w-1/2 ">
          <div className="flex items-center ">
            Download our app:
            <FontAwesomeIcon
              icon={faApple}
              className="px-6 h-8 hover:cursor-pointer"
            />{" "}
            <FontAwesomeIcon
              icon={faAndroid}
              className="px-2 h-8 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex space-x-10 w-2/3 hover:cursor-pointer">
          <div className="">Advertise</div>
          <div className="">Contact us</div>
          <div className="">Career</div>
          <div className="">Annoucement</div>
          <div className="">Trust & Safety</div>
          <div className="">Seller's Information</div>
          <div className="">Staying Safe & Site Security</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
