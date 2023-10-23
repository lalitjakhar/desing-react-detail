import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

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

  return (
    <>
      <Box sx={{ margin: "8rem 2rem" }}>
        <Grid container spacing={2}>
          {data?.products?.map((mobile) => {
            return (
              <Grid item xs>
                <img src={mobile.thumbnail} alt="" width={350} height={350} />
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      {mobile.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h6">{mobile.category}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: "600" }}>
                      ${mobile.price}
                    </Typography>
                    <Typography sx={{ color: "green" }}>
                      {mobile.discountPercentage}% off
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#ff9f00" }}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#fb641b" }}
                    >
                      Buy Now
                    </Button>
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
