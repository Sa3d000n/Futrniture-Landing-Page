import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function FeaturesSection() {
  return (
    <Stack spacing={8} padding={"60px 0px"}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"112px"}
        bgcolor={"#fafafa"}
      >
        <img
          src="https://images.eq3.com/homepage/US_EN/must-have/d11c2227-942c-409f-86ff-e0d13fc62bea.jpg"
          alt=""
          style={{ width: 720, height: 500 }}
        />
        <Stack gap={"24px"}>
          <Typography fontSize={32} lineHeight={1.4}>
            AS LOW AS 0% APR FINANCING <br />
            UPON APPROVAL WITH AFFIRM
          </Typography>
          <Typography lineHeight={1.4}>
            Affirm provides flexible payment solutions, allowing you to buy
            better and pay <br />
            over time.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              alignSelf: "flex-start",
              textTransform: "unset",
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"112px"}
        bgcolor={"#fafafa"}
      >
        <img
          src="https://images.eq3.com/homepage/US_EN/must-have/58b23475-689f-451a-918c-d0477c870ec8.jpg"
          alt=""
          style={{ width: 720, height: 500, order: 1 }}
        />
        <Stack gap={"24px"}>
          <Typography fontSize={32} lineHeight={1.4}>
            CHOOSE WITH CONFIDENCE
          </Typography>
          <Typography lineHeight={1.4}>
            Remove the guesswork in choosing your upholstery design by ordering{" "}
            <br /> complimentary swatches.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              alignSelf: "flex-start",
              textTransform: "unset",
            }}
          >
            Order Swatches
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"112px"}
        bgcolor={"#fafafa"}
      >
        <img
          src="https://images.eq3.com/homepage/US_EN/must-have/fd5e217b-e34b-4e36-92c6-0f3854923efc.jpg"
          alt=""
          style={{ width: 720, height: 500 }}
        />
        <Stack gap={"24px"}>
          <Typography fontSize={32} lineHeight={1.4}>
            Complimentary Design <br /> Services
          </Typography>
          <Typography lineHeight={1.4}>
            Let's create your dream space together
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              alignSelf: "flex-start",
              textTransform: "unset",
            }}
          >
            Book A Consultation
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
