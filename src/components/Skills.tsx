import React from "react";
import { Grid2, Card, Typography, CardContent, Avatar } from "@mui/material";

import pic from "./images/anothernamelogo.webp";

function Skills() {
  return (
    <>
      <Grid2
        container
        spacing={2}
        justifyContent="flex-end"
        sx={{ backgroundColor: "transparent", paddingRight: 10 }}
      >
        <Avatar
          alt="Your Name"
          src={pic}
          sx={{
            width: 200,
            height: 200,
          }}
        />
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
              Skills
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
      </Grid2>
    </>
  );
}

export default Skills;
