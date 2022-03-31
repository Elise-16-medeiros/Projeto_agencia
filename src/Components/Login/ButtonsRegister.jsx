import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Container } from '@mui/material';


export default function ButtonsRegister() {
  return (
    <Container fluid="md" className="botao">
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
    </Container>
  );
}

