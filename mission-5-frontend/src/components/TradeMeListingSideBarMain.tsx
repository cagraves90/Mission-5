const TradeMeListingSideBarMain = () => {
  const sideBarListing = [
    "Account Details",
    "Notifications",
    "Watchlist",
    "Buying",
    "Won",
    "Lost",
    "Start a listing",
    "Items I'm selling",
    "Sold",
    "Unsold",
    "Sales summary",
    "My Products",
    "Book a courier",
    "Manage bookings",
    "Settings",
    "Help",
  ];

  return (
    <div>
      <div className="h-full py-10 pl-5 bg-[#f5f3f3]">
        {sideBarListing.map((item) => (
          <p className="py-5 text-xl text-[#0090E5] hover:cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export default TradeMeListingSideBarMain;
