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

import ImageWithCaption from "./ImageWithCaption";

import cvopic1 from "../assets/cvopic1.png";
import cvopic2 from "../assets/cvopic2.png";
import cvopic3 from "../assets/cvopic3.png";
import cvopic4 from "../assets/cvopic4.png";
import cvopic5 from "../assets/cvopic5.png";
import { display } from "@mui/system";

function RayTracerPP() {
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
              width: "45vw",
              height: "auto", // Ensure card takes full width within its grid cell
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
                Cardfight Vanguard Online
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                Cardfight Vanguard Online is an idea of mine for a free
                cardfighting version of a nostalgic card game I used to play and
                love when I was younger. Having been inspired recently to create
                this application by friends and family, I've decided to do my
                best in this creation. Currently, I am trying to implement the
                core mechanics to make this application viable, before moving on
                to features that enhance user experience and truly make this
                game, fun. The core purpose I will be making this is to enjoy
                with friends and family who similarly have nostalgia with the
                game, as well as for myself to enjoy. Having this level of
                control over the applications features, I will be able to
                improve it immediately and make the game more personalized
                experience without any intentions besides users having fun
                playing Vanguard! This project is partway into development, and
                note that the UI and frontend framework may change drastically
                to improve user experience and immersion. Please enjoy the
                pictures of my progress so far!
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={cvopic4}
            alt="Collection of owned user cards"
            caption="Collection of a registered user's cards from opening packs!"
            width={"20vw"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={cvopic1}
            alt="Login Screen"
            caption="Login Screen"
            width={"40vw"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={cvopic2}
            alt="Temporary Home Page"
            caption="Temporary Home Page"
            width={"40vw"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={cvopic3}
            alt="Pack Opening screen"
            caption="Pack Opening screen"
            width={"40vw"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={cvopic5}
            alt="Decks view"
            caption="Decks view"
            width={"40vw"}
          />
        </Grid2>
      </Grid2>
    </>
  );
}

export default RayTracerPP;
