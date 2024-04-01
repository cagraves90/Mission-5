const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const TradeMe = require("./models/trademedb");

const http = require("http");
const server = http.createServer(app);
module.exports = server;

/* ============== Middleware ================== */
app.use(cors());
app.use(express.json());

// // ---------------------------------------------- MongoDB connection ----------------------------------------------

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

// ---------------------------------------------- Routes ---------------------------------------------- //
app.get("/api/trademe-listing", async (req, res) => {
  try {
    const listing = await TradeMe.find();
    res
      .status(200)
      .json({ message: "Fetched listing successfully", data: listing });
  } catch (error) {
    res.status(500).json({ message: "Error fetching listing", error: error });
  }
});

app.post("/api/trademe-listing", async (req, res) => {
  try {
    const newListing = new TradeMe(req.body);
    const savedListing = await newListing.save();
    res.status(201).json({
      message: "Listing created successfully",
      data: savedListing,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating listing", error: error });
  }
});

app.patch("/api/trademe-listing/:_id", async (req, res) => {
  try {
    const updatedListing = await TradeMe.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Listing updated successfully",
      data: updatedListing,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating listing", error: error });
  }
});

app.delete("/api/trademe-listing/:_id", async (req, res) => {
  try {
    const deletedListing = await TradeMe.findByIdAndDelete(req.params._id);
    res.status(200).json({
      message: "Listing deleted successfully",
      data: deletedListing,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting listing", error: error });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
}); // catch all route for any request that doesn't match the routes above

// ---------------------------------------------- Server Connection ----------------------------------------------
const port = 4000;

const backendServerPort = app
  .listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`);
  })
  .on("error", (error) => {
    console.log(error);
  });

module.exports = backendServerPort;
