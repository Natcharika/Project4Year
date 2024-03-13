import React from 'react';
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Webimage from "./CSB/bannercsb.gif"
import Box from '@mui/material/Box';

const TotalGrowthBarChart = () => {
  return (
    <MainCard sx={{minWidth:1600}}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}></Grid>
              <Box>
                <img src={Webimage} alt="my-gif" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default TotalGrowthBarChart;