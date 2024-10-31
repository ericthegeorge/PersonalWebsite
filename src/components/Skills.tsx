import React from "react";
import { Grid2, Card, Typography, CardContent, Avatar } from "@mui/material";

import pic from "./images/anothernamelogo.webp";
import AvatarLink from "./AvatarLinkComponent";

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
            <AvatarLink
              alt="Java"
              src="./images/javalogo.jpg"
              href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            />
            <AvatarLink
              alt="C"
              src="./images/clogo.jpg"
              href="https://en.wikipedia.org/wiki/C_(programming_language)"
            />
            <AvatarLink alt="Python" src={/* Python logo URL */} />
            <AvatarLink alt="Haskell" src={/* Haskell logo URL */} />
            <AvatarLink alt="JavaScript/TypeScript" src={/* TS logo URL */} />
            <AvatarLink alt="TypeScript" src={/* TS logo URL */} />
            <AvatarLink alt="HTML5" src={/* HTML5 logo URL */} />
            <AvatarLink alt="CSS" src={/* CSS logo URL */} />
            <AvatarLink alt="Rust" src={/* Rust logo URL */} />
            <AvatarLink
              alt="Assembly (ARMv8-A)"
              src={/* Assembly logo URL */}
            />
            <AvatarLink alt="R" src={/* R logo URL */} />

            <AvatarLink alt="React" src={/* React logo URL */} />
            <AvatarLink alt="Node.js" src={/* Node.js logo URL */} />
            <AvatarLink alt="Swing" src={/* Swing logo URL */} />
            <AvatarLink alt="JUnit" src={/* JUnit logo URL */} />
            <AvatarLink alt="NumPy" src={/* NumPy logo URL */} />
            <AvatarLink alt="Bootstrap" src={/* Bootstrap logo URL */} />
            <AvatarLink alt="MUI" src={/* MUI logo URL */} />

            <AvatarLink alt="VS Code" src={/* VS Code logo */} />
            <AvatarLink alt="GitHub" src={/* GitHub logo */} />
            <AvatarLink alt="IntelliJ IDEA" src={/* IntelliJ logo */} />
            <AvatarLink alt="PyCharm" src={/* IntelliJ logo */} />
            <AvatarLink alt="GDB" src={/* GDB logo */} />
            <AvatarLink alt="Eclipse" src={/* Eclipse logo */} />
            <AvatarLink alt="Excel" src={/* Excel logo */} />
            <AvatarLink alt="Linux" src={/* Linux logo */} />
            <AvatarLink alt="Raspberry Pi" src={/* Raspberry Pi logo */} />
          </CardContent>
        </Card>
      </Grid2>
    </>
  );
}

export default Skills;
