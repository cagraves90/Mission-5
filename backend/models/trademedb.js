const mongoose = require("mongoose");

// Cars schema
const trademeSchema = new mongoose.Schema({
  listingName: String,
  buyItNowPrice: Number,
  startingBidPrice: Number,
  imageURL: String,
  listingDetails: String,
  listingDescription: String,
  shippingOptions: String,
  paymentOptions: String,
});

// Cars model
module.exports = mongoose.model("TradeMe", trademeSchema);
