import React from "react";
import {
  Grid2,
  Card,
  Typography,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";

import pic from "./images/anothernamelogo.webp";
import AvatarLink from "./AvatarLinkComponent";

//pics
import javaLogo from "./images/javalogo.jpg";
import cLogo from "./images/clogo.jpg";
import pythonLogo from "./images/pythonlogo.jpg";
import haskellLogo from "./images/haskelllogo.jpg";
import jsLogo from "./images/jslogo.jpg";
import tsLogo from "./images/tslogo.jpg";
import html5Logo from "./images/html5logo.jpg";
import cssLogo from "./images/csslogo.jpg";
import rustLogo from "./images/rustlogo.jpg";
import assemblyLogo from "./images/assemblylogo.jpg";
import rLogo from "./images/rlogo.jpg";
import reactLogo from "./images/reactlogo.jpg";
import nodejsLogo from "./images/nodejslogo.jpg";
import junitLogo from "./images/junitlogo.jpg";
import numpyLogo from "./images/numpylogo.jpg";
import bootstrapLogo from "./images/bootstraplogo.jpg";
import muiLogo from "./images/muilogo.jpg";
import vsCodeLogo from "./images/vscodelogo.jpg";
import gitHubLogo from "./images/gitlogo.jpg";
import intellijLogo from "./images/intellijlogo.jpg";
import pyCharmLogo from "./images/pycharmlogo.jpg";
import eclipseLogo from "./images/eclipselogo.jpg";
import excelLogo from "./images/excellogo.jpg";
import linuxLogo from "./images/linuxlogo.jpg";
import raspberryPiLogo from "./images/raspberrypilogo.jpg";
import dartLogo from "./images/dartLogo.png";
import flutterLogo from "./images/flutterLogo.png";
import djangoLogo from "./images/djangoLogo.png";
import mysqlLogo from "./images/mysqlLogo.png";

function Skills() {
  return (
    <>
      <Grid2
        container
        spacing={2}
        // justifyContent="flex-end"
        sx={{ backgroundColor: "transparent", paddingRight: 10 }}
      >
        {/* <Avatar
          alt="Your Name"
          src={pic}
          sx={{
            width: 200,
            height: 200,
          }}
        /> */}
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
              sx={{
                fontFamily: "Consolas",
                fontSize: 30,
              }}
            >
              Skills
            </Typography>
            {/* <Typography
              variant="body1"
              align="center"
              sx={{
                fontFamily: '"Playfair Display", cursive, sans-serif',
                fontSize: 18,
              }}
            >
              Languages:
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: "Consolas",
                  fontSize: 24,
                  width: "100%",
                  marginY: 2,
                }}
              >
                Programming Languages
              </Typography>
              <AvatarLink
                alt="Java"
                src={javaLogo}
                href="https://en.wikipedia.org/wiki/Java_(programming_language)"
              />
              <AvatarLink
                alt="C"
                src={cLogo}
                href="https://en.wikipedia.org/wiki/C_(programming_language)"
              />
              <AvatarLink
                alt="Python"
                src={pythonLogo}
                href="https://www.python.org/"
              />
              <AvatarLink
                alt="Haskell"
                src={haskellLogo}
                href="https://en.wikipedia.org/wiki/Haskell"
              />
              <AvatarLink
                alt="JavaScript/TypeScript"
                src={jsLogo}
                href="https://en.wikipedia.org/wiki/JavaScript"
              />
              <AvatarLink
                alt="TypeScript"
                src={tsLogo}
                href="https://en.wikipedia.org/wiki/TypeScript"
              />
              <AvatarLink
                alt="HTML5"
                src={html5Logo}
                href="https://en.wikipedia.org/wiki/HTML5"
              />
              <AvatarLink
                alt="CSS"
                src={cssLogo}
                href="https://en.wikipedia.org/wiki/CSS"
              />
              <AvatarLink
                alt="Rust"
                src={rustLogo}
                href="https://en.wikipedia.org/wiki/Rust_(programming_language)"
              />
              <AvatarLink
                alt="Assembly (ARMv8-A)"
                src={assemblyLogo}
                href="https://en.wikipedia.org/wiki/ARM_architecture#ARMv8"
              />
              <AvatarLink
                alt="R"
                src={rLogo}
                href="https://en.wikipedia.org/wiki/R_(programming_language)"
              />

              <AvatarLink alt="Dart" src={dartLogo} href="https://dart.dev/" />

              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: "Consolas",
                  fontSize: 24,
                  width: "100%",
                  textAlign: "center",
                  marginY: 2,
                }}
              >
                Frameworks & Libraries
              </Typography>
              <AvatarLink
                alt="React"
                src={reactLogo}
                href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              />
              <AvatarLink
                alt="Node.js"
                src={nodejsLogo}
                href="https://en.wikipedia.org/wiki/Node.js"
              />
              <AvatarLink
                alt="JUnit"
                src={junitLogo}
                href="https://en.wikipedia.org/wiki/JUnit"
              />
              <AvatarLink
                alt="NumPy"
                src={numpyLogo}
                href="https://en.wikipedia.org/wiki/NumPy"
              />
              <AvatarLink
                alt="Bootstrap"
                src={bootstrapLogo}
                href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
              />
              <AvatarLink alt="MUI" src={muiLogo} href="https://mui.com/" />

              <AvatarLink
                alt="Flutter"
                src={flutterLogo}
                href="https://flutter.dev/"
              />

              <AvatarLink
                alt="Django"
                src={djangoLogo}
                href="https://www.djangoproject.com/"
              />

              <AvatarLink
                alt="MySQL"
                src={mysqlLogo}
                href="https://www.mysql.com/"
              />

              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: "Consolas",
                  fontSize: 24,
                  width: "100%",
                  textAlign: "center",
                  marginY: 2,
                }}
              >
                Tools & Platforms
              </Typography>
              <AvatarLink
                alt="VS Code"
                src={vsCodeLogo}
                href="https://code.visualstudio.com/"
              />
              <AvatarLink
                alt="GitHub"
                src={gitHubLogo}
                href="https://en.wikipedia.org/wiki/GitHub"
              />
              <AvatarLink
                alt="IntelliJ IDEA"
                src={intellijLogo}
                href="https://en.wikipedia.org/wiki/IntelliJ_IDEA"
              />
              <AvatarLink
                alt="PyCharm"
                src={pyCharmLogo}
                href="https://en.wikipedia.org/wiki/PyCharm"
              />
              <AvatarLink
                alt="Eclipse"
                src={eclipseLogo}
                href="https://en.wikipedia.org/wiki/Eclipse_(IDE)"
              />
              <AvatarLink
                alt="Excel"
                src={excelLogo}
                href="https://en.wikipedia.org/wiki/Microsoft_Excel"
              />
              <AvatarLink
                alt="Linux"
                src={linuxLogo}
                href="https://en.wikipedia.org/wiki/Linux"
              />
              <AvatarLink
                alt="Raspberry Pi"
                src={raspberryPiLogo}
                href="https://en.wikipedia.org/wiki/Raspberry_Pi"
              />

              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: "Arial Rounded",
                  fontSize: 16,
                  width: "100%",
                  textAlign: "center",
                  marginY: 2,
                }}
              >
                Feel free to click on icons you're unaware of to learn more.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </>
  );
}

export default Skills;
