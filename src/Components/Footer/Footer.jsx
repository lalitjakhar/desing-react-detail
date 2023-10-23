import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <>
      <Box
        container
        sx={{
          background: "linear-gradient(-45deg,#561915 0%,#5b621f 100%)",
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ShoppingCartIcon sx={{ marginRight: "10px" }} />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  SHOPPING
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                  },
                  alignItems: {
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  justifyContent: {
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-end",
                  },
                }}
              >
                <Typography sx={{ padding: "10px" }}>MENU</Typography>
                <Typography sx={{ padding: "10px" }}>OUR COMPANY</Typography>
                <Typography sx={{ padding: "10px" }}>YOUR PROFILE</Typography>
                <Typography sx={{ padding: "10px" }}>LOCATIONS</Typography>
                <Typography sx={{ padding: "10px" }}>CONTACT</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ borderColor: "#ffffff1a", marginBlock: "1rem" }} />
        <Box sx={{ padding: "3rem", color: "#26efe6" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ display: "block" }}>
                <Typography sx={{ fontWeight: "700" }}>
                  Designo Central Office
                </Typography>
                <Typography>3886 Wellington Street</Typography>
                <Typography>Toronto, Ontario M9C 3J5</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box sx={{ display: "block" }}>
                <Typography sx={{ fontWeight: "700" }}>
                  Contact Us (Central Office)
                </Typography>
                <Typography>P : +1 253-863-8967</Typography>
                <Typography>M : contact@designo.co</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: {
                  sm: "flex-start",
                  md: "flex-start",
                  lg: "flex-end",
                },
              }}
            >
              <Box>
                <FacebookRoundedIcon
                  sx={{ color: "#73ff50", marginRight: "10px" }}
                />
                <YouTubeIcon sx={{ color: "#73ff50", marginRight: "10px" }} />
                <TwitterIcon sx={{ color: "#73ff50", marginRight: "10px" }} />
                <PinterestIcon sx={{ color: "#73ff50", marginRight: "10px" }} />
                <InstagramIcon sx={{ color: "#73ff50", marginRight: "10px" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
