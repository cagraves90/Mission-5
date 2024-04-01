import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  {
    label: "Start comparing your listings!",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail1.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: "First, login and then go to your Watchlist.",
  },
  {
    label: "Find the button & Click",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail2.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description:
      "Find the button at the top-left corner of the card which is opposite to Watchlist button.",
  },
  {
    label: "This is the new button",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail3.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: `Like the Watchlist button, add to or remove from list by clicking on it.`,
  },
  {
    label: "Click to check the compare list",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail4.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: `If more than 2 listings are added to the list, this Kiwi bird will pop up. Clicking on it, you will see the compare list then.`,
  },
  {
    label: "Another way to check the list",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail5.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: `If more than 2 listings are added to the list, this Kiwi bird will pop up. Clicking on it, you will see the compare list then.`,
  },
  {
    label: "Check out the listing details",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail6.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: `These are the listings you added to the compare list. You can check out the details you need and fold those that less relevant to you.`,
  },
  {
    label: "Jump back to where you were",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail7.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: `Click somewhere outside of the list to jump out this compare mode.`,
  },
  {
    label: "",
    imgCarousel: (
      <Carousel responsive={responsive}>
        <div className="flex justify-center">
          <img
            src="./images/NewFunctionCompareDetail8.png"
            alt="image for new function"
            style={{ borderRadius: "50%", height: "70%", width: "70%" }}
          />
        </div>
      </Carousel>
    ),
    description: ``,
  },
];

const TradeMeNewCompareFunctionInfo = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 90,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography sx={{ fontSize: 20 }}>
            {images[activeStep].label}
          </Typography>
        </Paper>
        <Box
          sx={{
            height: 300,
            maxWidth: 400,
            width: "100%",
            p: 1,
          }}
        >
          <div>{images[activeStep].imgCarousel}</div>
        </Box>

        <Box
          sx={{
            height: 20,
            maxWidth: 400,
            width: "100%",
            px: 1,
            pb: 15,
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {images[activeStep].description}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Box>
    </div>
  );
};
export default TradeMeNewCompareFunctionInfo;
