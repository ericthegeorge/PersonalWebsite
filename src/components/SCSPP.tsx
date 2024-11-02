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

import scs1pic from "../assets/scs1pic.png";
import scs2pic from "../assets/scs2pic.png";
import scs3pic from "../assets/scs3pic.png";
import scs4pic from "../assets/scs4pic.png";
import scs5pic from "../assets/scs5pic.png";
import scs6pic from "../assets/scs6pic.png";
import scs7pic from "../assets/scs7pic.png";
import scs8pic from "../assets/scs8pic.png";
import scs9pic from "../assets/scs9pic.png";
import scs10pic from "../assets/scs10pic.png";

import ImageWithCaption from "./ImageWithCaption";

function SCSPP() {
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
            src={scs1pic}
            alt="Welcome Screen."
            caption="Welcome Screen"
            width={"45vw"}
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
                Self-Checkout Simulator
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                This project was made for the SENG300 Final Group Project. It
                attempts to emulate not only the software side involved in a
                regular self-checkout, but also the hardware side, the attendant
                side, and of course, the user side. The goal is to emulate a
                virtual self-checkout system, as a learning proof of concept of
                the design processes in the 'real-world'. That is, we would
                receive more info from management and the hardware team as we
                created the project. We would have to meet the criteria the
                'client' (our professor, Dr. Walker) demanded, from regular
                client meetings to ascertain the product he desired. Since
                hardware is expensive, we would have to simulate the hardware
                inputs as we developed our software as well, so as to ensure if
                effectiveness. Please find below an abridged version of the
                implemented features:
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                {" "}
                {/* Add padding for indentation */}
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Virtual barcodes and barcode scanning.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Local databasing.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Simulated banknotes of several denominations.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Tiered checkouts.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Membership and rewards system.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Alternative ways to checkout items (PLU, Visual Catalogue).
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Weight checking.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Coin depositing, including the coin receival process from
                    slot to storage to tray, and change.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Power utility and power interruption handling.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Maintenance system.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    Attendant manual override.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
                  >
                    and more...
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body1"
                align="center"
                sx={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}
              >
                Note that this was done with the Java Swing GUI framework, as
                the emphasis was on the logic more so than the UI.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2>
          <ImageWithCaption
            src={scs2pic} // Initial Screen for Attendants
            alt="Initial Screen for Attendants"
            caption="Initial Screen for Attendants"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs3pic} // Attendant Maintenance
            alt="Attendant Maintenance"
            caption="Attendant Maintenance"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs4pic} // Customer Screen When Adding Items
            alt="Customer Screen When Adding Items"
            caption="Customer Screen When Adding Items"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs5pic} // After Scanning an Item
            alt="After Scanning an Item"
            caption="After Scanning an Item"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs6pic} // Weight Discrepancy Since the Customer Did Not Move the Item to the Bagging Area
            alt="Weight Discrepancy Since the Customer Did Not Move the Item to the Bagging Area"
            caption="Weight Discrepancy Since the Customer Did Not Move the Item to the Bagging Area"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs7pic} // Adding Items by Their PLU
            alt="Adding Items by Their PLU"
            caption="Adding Items by Their PLU"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs8pic} // Customer Flagged Station 1, Marked on Attendant Side
            alt="Customer Flagged Station 1, Marked on Attendant Side"
            caption="Customer Flagged Station 1, Marked on Attendant Side"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs9pic} // Payment Screen
            alt="Payment Screen"
            caption="Payment Screen"
            width={"45vw"}
          />
        </Grid2>

        <Grid2>
          <ImageWithCaption
            src={scs10pic} // Receipt
            alt="Receipt"
            caption="Receipt"
            width={"45vw"}
          />
        </Grid2>
      </Grid2>
    </>
  );
}

export default SCSPP;
