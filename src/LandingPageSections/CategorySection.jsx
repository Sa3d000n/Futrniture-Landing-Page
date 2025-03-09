import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";

export default function CategorySection() {
  const imagesData = [
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/6b288bb2-3fa4-456a-80bc-fbb672e04ea3.png",
      imgTitle: "Ready to Ship Upholstery",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/5e328e25-4634-45d2-a64b-3593ecca2dcd.png",
      imgTitle: "Dining",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/a3ef7912-bdbf-4f02-a572-7a41d5fea05d.png",
      imgTitle: "Storage Beds",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/c0872078-79fe-4675-81dd-0ddcdbe743d4.png",
      imgTitle: "Lighting",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/707538ba-84a4-4968-95d4-31a4604c5796.png",
      imgTitle: "Accent Tables",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/a6730147-277e-47d0-8be2-bb9a517da317.png",
      imgTitle: "Rugs",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/70131eb9-8bc1-496c-94b7-6e1a8b14b78a.png",
      imgTitle: "Bar & Counter Stools",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/cedee41a-26ee-45c2-9fb0-cc564753dc7c.png",
      imgTitle: "Accent Stools",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/398e4550-abb1-4722-8975-3678b3200f48.png",
      imgTitle: "Accessories",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/b3fa3943-25fb-4d32-b895-16c1b1a14c22.png",
      imgTitle: "Accent Chairs",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/8ff511dc-4791-423a-acf7-b42fa222f2d7.png",
      imgTitle: "Outdoor",
    },
    {
      imgSrc:
        "https://images.eq3.com/homepage/US_EN/featured-category/b0add484-52bf-40ea-b320-a1e5c4ffadd3.png",
      imgTitle: "Media & Storage",
    },
  ];
  return (
    <Box padding={"60px 0"}>
      <Typography fontSize={"32px"}>SHOP BY CATEGORY</Typography>

      <Box>
        <ImageList cols={4} gap={20}>
          {imagesData.map((item, index) => (
            <ImageListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#fafafa",
                paddingTop: 5,
              }}
            >
              <Box
                component="img"
                src={item.imgSrc}
                alt={item.imgTitle}
                sx={{
                  height: 180,
                  width: 180,
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <ImageListItemBar
                title={item.imgTitle}
                position="below"
                sx={{
                  overflow: "hidden",
                  textAlign: "center",
                  marginBottom: "5px",
                  marginTop: "90px",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
