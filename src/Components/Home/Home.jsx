import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Bike from "../../Assets/bike.avif";
import Building from "../../Assets/nature.avif";
import Tower from "../../Assets/tower.avif";
import Jeep from "../../Assets/jeep.avif";

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ marginBlock: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item xs>
              <img src={Bike} alt="" width={250} height={300} />
              <Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h5" sx={{fontWeight:'600'}}>Forest Bike Riding </Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h6">Jaipur Rajasthan</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography sx={{color:'gray'}}>( Riding )</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <img src={Building} alt="" width={250} height={300} />
              <Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h5" sx={{fontWeight:'600'}}>Jeep on Road</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h6">Jodhpur Rajasthan</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography sx={{color:'gray'}}>( Car Culture )</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <img src={Tower} alt="" width={250} height={300} />
              <Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h5" sx={{fontWeight:'600'}}>England Tower</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h6">Europe England</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography sx={{color:'gray'}}>(Architecture)</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <img src={Jeep} alt="" width={250} height={300} />
              <Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h5" sx={{fontWeight:'600'}}>Forest Jeep Riding </Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant="h6">Ranthambhore Rajasthan</Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography sx={{color:'gray'}}>( Riding )</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
