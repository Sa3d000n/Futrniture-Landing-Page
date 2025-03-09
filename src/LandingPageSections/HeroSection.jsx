import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function HeroSection() {
  return (
    <Box
      height="95vh"
      margin={"32px 0px"}
      sx={{
        backgroundImage:
          "url('https://images.eq3.com/image-service/086b8e80-dedb-41b1-a158-f3020044e4f8/eq3-marcel-walnut-bundle_COMPRESSED.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        height={"100%"}
        sx={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.6) 10%, transparent 90%)",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"flex-end"}
          height={"100%"}
          paddingBottom={"24px"}
        >
          <Typography color="white" fontSize={"48px"}>
            LABOUR DAY: ENJOY 200/0 OFF EQ3
          </Typography>
          <Typography color="white" fontSize={"24px"}>
            Save on designs made with longevity in mind. Now until September
            3rd.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
