import { Box, Grid, Typography } from "@mui/material";
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
      <Box sx={{ margin: "2rem" }}>
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
