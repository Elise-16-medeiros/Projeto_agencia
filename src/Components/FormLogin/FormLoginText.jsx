import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Login.css';

export default function FormLoginText() {
  return (
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
      <Typography variant="h3" gutterBottom component="div">
      Welcome Back
      </Typography>
    </Grid>
  );
}
