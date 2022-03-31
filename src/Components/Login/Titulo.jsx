import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



export default function Titulo() {
  return (
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
      <Typography variant="h3" gutterBottom component="div">
      Sign up
      </Typography>
    </Grid>
  );
}
