import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import './FormLogin.css';



export default function BasicButtons() {
  return (
    <Box className="botaoForm">
      <Stack spacing={5} direction="row">
        <Button variant="contained">Entrar</Button>
      </Stack>
    </Box>
  );
}