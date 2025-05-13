import React from "react";
import {
  Grid2,
  Typography,
  CardContent,
  Avatar,
  Card,
  Box,
} from "@mui/material";
import pfp from "./images/pfp.jpg";
import githublogo from "./images/githublogo.jpg";
import linkedinlogo from "./images/linkedinlogo.jpg";
import mailLogo from "./images/mailLogo.jpg";
import resumelogo from "./images/resumelogo.png";
import resume from "../assets/Eric George Resume.pdf";
import { keyframes } from "@mui/material";

import "./About.css";
const spinAnimation = keyframes`
  0% {
  transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
}
25% {
  transform: rotateY(90deg) rotateX(10deg) rotateZ(-2deg);
}
50% {
  transform: rotateY(180deg) rotateX(0deg) rotateZ(0deg);
}
75% {
  transform: rotateY(90deg) rotateX(10deg) rotateZ(2deg);
}
100% {
  transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
}

`;

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Your Name"
          src={pfp}
          sx={{
            width: 350,
            height: 350,
            animation: `${spinAnimation} 15s ease infinite`,
            perspective: "1000px",
            animationDelay: "0s",
          }}
        />
      </Box>
      <Grid2
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        sx={{ backgroundColor: "transparent" }}
      >
        <Card
          sx={{
            backgroundColor: "#486173",
            backdropFilter: "blur(7px)",
            borderRadius: "10%",
            width: { xs: "90%", sm: "80%", md: "60%" },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column", // Align items in a column
              alignItems: "center", // Center horizontally
              justifyContent: "center", // Center vertically
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: "Cormorant Garamond",
                fontSize: 32,
              }}
            >
              Eric George
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontFamily: "Cormorant Garamond",
                fontSize: 20,
                fontStyle: "oblique",
              }}
            >
              Third Year Computer Science Student at University of Calgary.{" "}
              <br></br>
              Skilled developer ready for anything!
            </Typography>
            <Box
              sx={{
                display: "flex", // Use flexbox
                justifyContent: "center", // Center the avatars horizontally (optional)
                alignItems: "center", // Center the avatars vertically
                gap: 2, // Optional: space between avatars
              }}
            >
              <a
                href={"https://github.com/ericthegeorge"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  alt="Github"
                  src={githublogo}
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                href={"https://www.linkedin.com/in/eric-george-583624243/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  alt="LinkedIn"
                  src={linkedinlogo}
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                href={"mailto:erickurian@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  alt="Mail"
                  src={mailLogo}
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Avatar
                  alt="Resume"
                  src={resumelogo}
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                />
              </a>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </>
  );
};

export default About;
