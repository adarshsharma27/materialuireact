import React from 'react'
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Chart from "./Chart";
import { Grid ,Container } from '@material-ui/core';
import LinesChart from './LinesChart';
const MainChart = () => {
  return (
    <>
    <Container style={{ padding: "40px 20px" }}>
    <Grid container justifyContent="center" alignItems="center" shadow={4}>
    <Grid item xs={12} md={6}>
    <BarChart/>
    </Grid>
    <Grid item xs={12} md={6}>
     <LinesChart/>
    </Grid>
    </Grid>   
    <PieChart/>
                          <Chart/>
                          </Container>
    </>
  )
}

export default MainChart