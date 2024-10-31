import React from "react";
import { Grid2, Avatar, Card, CardContent, Typography } from "@mui/material";

import pic from "./images/profileimage.jpeg";
function PersonalProjects() {
  return (
    <>
      <Grid2
        container
        spacing={2}
        justifyContent="flex-end"
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
              Personal Projects
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
          src={pic}
          sx={{
            width: 200,
            height: 200,
          }}
        />
      </Grid2>
    </>
  );
}

export default PersonalProjects;
