import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{
          paddingInline: "1rem",
          background: "linear-gradient(-45deg,rgba(147,26,222,1) 0%,rgba(28,206,234,1) 100%)",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters>
          <ShoppingCartIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHOPPING
          </Typography>

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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">MENU</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">OUR COMPANY</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">YOUR PROFILE</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">LOCATIONS</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">CONTACT</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ShoppingCartIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHOPPING
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                justifyContent: "end",
              },
            }}
          >
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              MENU
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              OUR COMPANY
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              YOUR PROFILE
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              LOCATIONS
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              CONTACT
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: "8rem 2rem" }}>
        <Grid container spacing={2}>
          {data?.products?.map((mobile, index) => {
            return (
              <Grid item xs>
                <img src={mobile.thumbnail} alt="" width={350} height={350} />
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      {mobile.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6">{mobile.category}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={{ color: "gray" }}>
                      {mobile.description}
                    </Typography>
                  </Box>
                  <Box sx={{display:'flex'}}>
                    <Button variant="contained">Add To Cart</Button>
                    <Button variant="contained" color="secondary">Buy Now</Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
