import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const pages = [
  "Living",
  "Dining",
  "Bedroom",
  "Outdoor",
  "Office",
  "Lighting",
  "Rugs",
  "Accessories",
  "Brands",
  "Inspiration",
  "Gifts",
  "Sale",
];
export default function NavBarSection() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);s
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" color="white" elevation={0}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          margin={"18px 0"}
        >
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 175 76"
            width="70"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            fontSize={"16px"}
          >
            <path
              d="M9.4945 39.9267H35.8761V31.2007H9.4945V11.1035H40.5256V2.38557H0V71.0164H41.6436V62.296H9.4945V39.9267Z"
              fill="black"
            ></path>
            <path
              d="M162.267 34.4418C168.143 31.6014 171.376 25.9205 171.376 19.4561C171.376 8.78012 162.561 0.846542 150.513 0.846542C137.78 0.846542 128.28 9.85752 128.084 22.7863H137.78C138.074 14.8527 142.971 9.75959 150.219 9.75959C157.076 9.75959 161.875 14.363 161.875 20.3377C161.875 26.3124 156.782 30.8178 149.044 30.8178H143.822V39.2411H149.436C158.937 39.2411 164.911 43.9425 164.911 51.4843C164.911 58.5363 158.937 63.7275 150.709 63.7275C142.58 63.7275 136.703 58.2425 136.213 49.7213V49.6233H126.517V49.7212C126.81 63.4336 136.703 72.5425 150.709 72.5425C164.226 72.5425 174.412 63.7274 174.412 51.4843C174.412 43.7466 169.613 37.2822 162.267 34.4418Z"
              fill="black"
            ></path>
            <path
              d="M83.1975 0.846497C63.5105 0.846497 47.5454 16.7137 47.5454 36.8904C47.5212 41.5791 48.4268 46.226 50.2099 50.5625C51.993 54.8989 54.6182 58.8388 57.9337 62.1542C61.2491 65.4697 65.189 68.0949 69.5254 69.878C73.8619 71.6611 78.5088 72.5667 83.1975 72.5425C91.0331 72.5425 98.0852 70.2898 103.57 66.4699L111.504 75.285L118.654 69.8001L110.426 60.2993C114.92 55.0826 117.821 48.6861 118.788 41.8692C119.754 35.0523 118.743 28.1013 115.876 21.8416C113.009 15.5819 108.406 10.2763 102.614 6.55473C96.8213 2.8332 90.0825 0.85205 83.1975 0.846497V0.846497ZM103.766 53.1494L95.7345 44.4322L88.8783 49.8192L97.2037 59.4178C93.1879 62.1603 88.5844 63.6295 83.1975 63.6295C68.9954 63.6295 57.3399 50.9945 57.3399 36.8904C57.3399 22.5904 68.9954 9.95541 83.1975 9.95541C97.7913 9.95541 109.447 22.5904 109.447 36.8904C109.403 42.7891 107.405 48.507 103.766 53.1494V53.1494Z"
              fill="black"
            ></path>
          </svg>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
                <Divider />

                <MenuItem onClick={handleCloseNavMenu}>
                  <Stack direction={"row"} spacing={1}>
                    <GrLocation color="black" size={"1.2rem"} />
                    <Typography color="black">Store Finder</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Stack direction={"row"} spacing={1}>
                    <AiOutlineQuestionCircle color="black" size={"1.2rem"} />
                    <Typography color="black">Help</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Stack direction={"row"} spacing={1}>
                    <FaRegHeart color="black" size={"1.2rem"} />
                    <Typography color="black">Favorites</Typography>{" "}
                  </Stack>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  {" "}
                  <Stack direction={"row"} spacing={1}>
                    <FaRegUser color="black" size={"1.2rem"} />

                    <Typography color="black">Join/Login to EQ3</Typography>
                  </Stack>{" "}
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  {" "}
                  <Stack direction={"row"} spacing={1}>
                    <MdLanguage color="black" size={"1.2rem"} />

                    <Typography color="black">EN / CAD</Typography>
                  </Stack>{" "}
                </MenuItem>
              </Menu>
            </Box>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <GrLocation color="black" size={"1.2rem"} />
              <AiOutlineQuestionCircle color="black" size={"1.2rem"} />
              <FaRegHeart color="black" size={"1.2rem"} />
              <Stack direction={"row"} spacing={1}>
                <FaRegUser color="black" size={"1.2rem"} />

                <Typography color="black">Join/Login to EQ3</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <MdLanguage color="black" size={"1.2rem"} />

                <Typography color="black">EN / CAD</Typography>
              </Stack>
            </Breadcrumbs>
            <Button variant="outlined" color="black">
              <BsCart3 />
              <Typography> Cart (0)</Typography>
            </Button>
          </Stack>
        </Stack>
        <Container
          maxWidth="xl"
          sx={{ border: { xs: "none", md: "1px solid rgba(0,0,0,0.2)" } }}
        >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Search sx={{ border: "1px solid grey", flex: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
