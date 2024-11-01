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

import rt1pic from "../assets/rt1pic.png";
import rt2pic from "../assets/rt2pic.png";
import rt3pic from "../assets/rt3pic.png";
import rt4pic from "../assets/rt4pic.png";
import RayTracerPP from "./RayTracerPP";
import EyeTimerPP from "./EyeTimerPP";
import SCSPP from "./SCSPP";

interface subProps {
  src: string;
  alt: string;
  caption: string;
}
const ImageWithCaption = ({ src, alt, caption }: subProps) => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box width={"65rem"}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto", borderRadius: "5rem" }}
        width={"100 rem"}
      />
      <Typography
        variant="body1"
        display="block"
        align="center"
        sx={{
          fontFamily: "Cormorant Garamond",
          fontSize: 20,
          fontStyle: "oblique",
          marginTop: "0.1rem",
          color: theme.palette.text.primary,
        }}
      >
        {caption}
      </Typography>
    </Box>
  );
};

function PersonalProjects() {
  return (
    <>
      <Grid2
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        sx={{ backgroundColor: "transparent", paddingLeft: 10 }}
      >
        <Card
          sx={{
            backgroundColor: "#7e9ae6",
            backdropFilter: "blur(7px)",
            borderRadius: "10%",
            width: { xs: "90%", sm: "80%", md: "60%" },
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontFamily: "Cormorant Garamond" }}
            >
              Personal Projects
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <RayTracerPP />
      <EyeTimerPP />
      <SCSPP />
    </>
  );
}

export default PersonalProjects;
