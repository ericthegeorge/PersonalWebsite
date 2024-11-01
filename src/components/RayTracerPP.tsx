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

import rt1pic from "../assets/rt1pic.png";
import rt2pic from "../assets/rt2pic.png";
import rt3pic from "../assets/rt3pic.png";
import rt4pic from "../assets/rt4pic.png";

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
        {/* Image Column */}
        <Grid2>
          {" "}
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={rt1pic}
            alt="Final Ray Tracer Result Image"
            caption="A demo image 1600 x 900 of RTRandomFinal, my final iteration of this Ray Tracer."
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
              height: "15rem", // Ensure card takes full width within its grid cell
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
                Ray Tracer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                This Ray Tracer is designed to demonstrate how ray tracing works
                at a basic level. Starting from the direction of simulated
                light, to different refraction and reflection rates by material,
                different shapes and objects, external cameras, glass, and
                aperture level focusing. Created under the guidance of Carson
                Cheng, my excellent high school teacher of Computer Science
                30/31 AP.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              backdropFilter: "blur(7px)",
              borderRadius: "10%",
              flexDirection: "column",
              display: "flex",
              width: "60rem",
              height: "15rem", // Ensure card takes full width within its grid cell
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond" }}
              >
                Beginning Process
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                Starting from simple 2D shapes to just appear on our swing
                panels, a relatively basic start, we add features one by one to
                reach our end goal of a Ray Tracer. Initially, much of the
                process consisted of hard coding in features we would like to be
                automatic, like the colours, shape, area, dimensions, location,
                etc. The goal in the beginning parts is simply to open a path
                for the future.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={rt2pic}
            alt="A Red Square"
            caption="The Red Square"
            width={"20rem"}
          />
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={rt3pic}
            alt="A 3D Image"
            caption="First 3D Image"
            width={"45rem"}
          />
        </Grid2>
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
              height: "33rem", // Ensure card takes full width within its grid cell
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond" }}
              >
                Into 3D
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                The difficulty only picks up when rendering 3D shapes. As
                compared to 2D, there are many more aspects to consider:
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                {" "}
                {/* Add padding for indentation */}
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Coordinates in 3D
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Ray tracing past an object
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Ray normals on an object and angle of reflection
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Degree of refraction and reflection
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Antialiasing
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    etc.
                  </Typography>
                </li>
              </ul>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                It's important to note that while some of these could have been
                considered in 2D, it would be far less consequential to the 2D
                results by nature. Implementing these features took considerable
                amount of time. Fortunately, I had my instructor's guidance when
                necessary. Overall, this part of the process is where I learned
                the most about how ray tracing worked, and why it was so
                computationally expensive. It gave me a deeper profundity for
                the field of Computer Graphics.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
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
              height: "33rem", // Ensure card takes full width within its grid cell
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond" }}
              >
                Finishing Touches
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                Although the bulk of the ray tracer has passed, it could not be
                complete without some fundamental features. After all, there is
                more to vision then just light bouncing around until it hits our
                retina. Important features here consisted of:
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                {" "}
                {/* Add padding for indentation */}
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Ray Diffusion
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Lambertian reflection
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Glass
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Moveable Camera
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Focus levels
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body1"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                Usually, ray tracing is used to provide a higher sense of
                realism in the graphics. If there was not such an advantage to
                it, it's unlikely it would be used often. Pre-loaded creations
                would be much more sensible. It's because with ray-tracing we
                approach reality at a level different from manual creations. We
                can simulate the environment to a great degree, and perhaps
                fully immerse the user into the graphic. These features are at
                minimum necessary for such a level of ray tracing.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2>
          {/* Adjust the size as needed */}
          <ImageWithCaption
            src={rt4pic}
            alt="A Complex Ray Tracing of a Sphere"
            caption="New Features"
            width={"45rem"}
          />
        </Grid2>
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
              height: "15rem", // Ensure card takes full width within its grid cell
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond" }}
              >
                Concluding Thoughts
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                This project was very enjoyable, and I recommend anyone to just
                dig right into it. At first I was taken aback by the scale of
                this. I didn't think implementing a Ray Tracer from scratch was
                such a simple thing. But given enough time and passion, it was
                more than feasible. I'm sure you can too. The more you learn,
                the more you want to learn. And that just makes this all the
                more fun.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
}

export default RayTracerPP;
