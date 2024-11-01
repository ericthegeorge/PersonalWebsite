import React from "react";
import {
  Grid2,
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

import et1pic from "../assets/et1pic.png";
import et2pic from "../assets/et2pic.png";
import et3pic from "../assets/et3pic.png";
import et4pic from "../assets/et4pic.png";

interface subProps {
  src: string;
  alt: string;
  caption: string;
  width: string;
}
const ImageWithCaption = ({ src, alt, caption, width }: subProps) => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box width={width}>
      <img
        src={src}
        alt={alt}
        style={{ width: width, height: "auto", borderRadius: "1rem" }}
        width={"65 rem"}
      />
      <Typography
        variant="body1"
        display="block"
        align="center"
        sx={{
          fontFamily: "Cormorant Garamond",
          fontSize: 20,
          fontStyle: "oblique",
          fontWeight: "bold",
          marginTop: "0.1rem",
          color: theme.palette.text.primary,
        }}
      >
        {caption}
      </Typography>
    </Box>
  );
};

function EyeTimerPP() {
  return (
    <>
      <Grid2
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"} // Align items vertically
        marginTop={"16px"}
        sx={{ backgroundColor: "transparent" }}
      >
        {/* Image Column */}
        <Grid2>
          {" "}
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={et1pic}
            alt="Initial Swing Face of the Timer."
            caption="The Initial Opening Screen"
            width={"65rem"}
          />
        </Grid2>

        {/* Card Column */}
        <Grid2>
          {/* Adjust the size as needed */}
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              backdropFilter: "blur(7px)",
              borderRadius: "10%",
              flexDirection: "column",
              display: "flex",
              width: "47rem",
              height: "29rem", // Ensure card takes full width within its grid cell
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: 45,
                  textEmphasis: "bold",
                }}
              >
                Eye Timer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                This project was made as a term project for my CS20 high school
                class. The concept was to provide a timer that alerted device
                users that they were straining their eyes. This was done by
                following a rule of thumb by optometrical professionals, the
                20-20-20 rule. This advice had been given to me multiple times,
                and I believe its important for our eye health to stop straining
                it continuously for extended periods of time. As such, I had
                decided on this concept for my term project. Unfortunately, the
                biggest issue with this application I created is the amount of
                processing power required. By nature as a Java application,
                while it runs fast, it takes up significant memory and cpu time.
                Resultingly, my plan for it as a background process to help self
                monitor was blocked. However, as a concept I believe it is still
                valuable, as looking away for only 20 seconds is hardly a
                significant amount of time to pause one's work and support their
                own health. Find below some images of the results!
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={et2pic}
            alt="Running face of the Eye Timer GUI."
            caption="Running Mode"
            width={"65rem"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={et3pic}
            alt="Showing record of user logs."
            caption="After Some User Logs"
            width={"65rem"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={et4pic}
            alt="Monitor showing 68MB to run this program."
            caption="The Flagged Issue: Excessive Memory Usage for a Relatively Simple Program"
            width={"40rem"}
          />
        </Grid2>
      </Grid2>
    </>
  );
}

export default EyeTimerPP;
