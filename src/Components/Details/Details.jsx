import { Box, Grid, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
const params = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params?.pid}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [params]);
  console.log(data);
  return (
    <>
      <Box sx={{ margin: "8rem 2rem" }}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            {data?.images?.map((mobile) => (
              <img src={mobile} alt="" />
            ))}
            <Box sx={{ marginBlock: "1rem", display: "flex", gap: 2 }}>
              <Button variant="contained" sx={{ backgroundColor: "#ff9f00" }}>
                Add To Cart
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#fb641b" }}>
                Buy Now
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ display: "block" }}>
              <Typography variant="h5" sx={{ fontWeight: "400" }}>
                {data?.brand} {data?.title}
              </Typography>
              <Typography>{data?.category}</Typography>
              <Box sx={{ display: "flex", marginBlock: "1rem" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1rem",
                    padding: "0px 5px",
                  }}
                >
                  {data?.rating}
                  <StarIcon sx={{ height: "1rem" }} />
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  ${data?.price}
                </Typography>
                <Typography sx={{ color: "green" }}>
                  {data?.discountPercentage}% off
                </Typography>
              </Box>
              <Typography sx={{ color: "grey", marginBlock: "1rem" }}>
                {data?.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Details;
