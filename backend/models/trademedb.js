const mongoose = require("mongoose");

// Cars schema
const trademeSchema = new mongoose.Schema({
  listingImage: String,
  listingArea: String,
  listingCloseTime: String,
  listingName: String,
  listingDetails: String,
  buyItNowPrice: Number,
  startingBidPrice: Number,
  itemCondition: String,
  sellersRating: String,
  itemShipping: String,
  itemShippingTwo: String,
  itemShippingThree: String,
  itemPaymentOptions: String,
  itemPaymentOptionsTwo: String,
});

// Cars model
module.exports = mongoose.model("TradeMe", trademeSchema);
