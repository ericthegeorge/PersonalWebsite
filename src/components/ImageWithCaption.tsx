import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

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

export default ImageWithCaption;
