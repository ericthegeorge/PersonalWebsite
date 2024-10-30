import React from "react";
import { Grid2, Typography, CardContent, Avatar, Card } from "@mui/material";
import pfp from "./images/pfp.png";
import { keyframes } from "@mui/material";

import "./About.css";
const spinAnimation = keyframes`
  0% {
    transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg);
  }
  25% {
    transform: rotateY(90deg) rotateX(-10deg) rotateZ(-2deg);
  }
  50% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
  75% {
    transform: rotateY(90deg) rotateX(10deg) rotateZ(2deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg);
  }
`;

const About = () => {
  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{ backgroundColor: "transparent", paddingLeft: 10 }}
      >
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(7px)",
            borderRadius: "10%",
            width: { xs: "90%", sm: "80%", md: "60%" },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              sx={{ fontFamily: '"Open Sans", cursive, sans-serif' }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontFamily: '"Playfair Display", cursive, sans-serif',
              }}
            >
              My content here!
            </Typography>
          </CardContent>
        </Card>
        <Avatar
          alt="Your Name"
          src={pfp}
          sx={{
            width: 200,
            height: 200,
            animation: `${spinAnimation} 10s ease infinite`,
            perspective: "1000px",
            animationDelay: "20s",
          }}
        />
      </Grid2>
    </>
  );
};

export default About;
